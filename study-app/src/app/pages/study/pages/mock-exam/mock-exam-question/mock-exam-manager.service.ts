import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IQuestion, AnswerChoice } from "../../../../../data/_data.models/question.model";
import { QuestionGenerator } from "../../../../../utils/question-generator/question-generator.service";
import { IGrade, CorrectOrIncorrect, IGradedQuestion } from "~/app/data/_data.models/grade.model";

const PASSING_CUTOFF_PERCENTAGE = 75


@Injectable({
    providedIn: 'root'
})
export class MockExamManagerService {
    
    private seconds: number
    private minutes: number
    private hours: number
    
    isTimerRunning: boolean = false

    timer: BehaviorSubject<string[]>

    timerExpired: BehaviorSubject<boolean>

    examQuestions: IQuestion[]

    examAnswers: any[]

    grade: IGrade

    constructor(private readonly questionGenerator: QuestionGenerator) {
        this.initializeTimer();
    }

    initializeTimer() {
        this.timerExpired = new BehaviorSubject(false)
        this.timer = new BehaviorSubject(['--', '--', '--'])
        this.hours = 0;
        this.minutes = 1;
        this.seconds = 5;
    }

    startTimer() {
        this.isTimerRunning = true;
        this.tickTimer()
    }

    private tickTimer() {

        this.timer.next([
            this.padWithZeros(this.hours),
            this.padWithZeros(this.minutes),
            this.padWithZeros(this.seconds),
        ])

        setTimeout(() => {
            this.subtractOneSecond();
        }, 1000)
    }

    private subtractOneSecond() {

        this.seconds--

        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--

            if (this.minutes < 0) {

                this.minutes = 59;
                this.hours--
            }

        }

        if (this.hours < 0) {
            this.timerExpires()
        }
        else
            this.tickTimer()

    }

    private timerExpires() {
        console.log('out of time!')

        this.timer.complete()
        this.isTimerRunning = false;
        this.timerExpired.next(true)
    }

    private padWithZeros(num: number): string {
        const max = '00'
        const s = max + num;
        const g = s.substr(s.length - max.length);
        return g
    }

    getCurrentTime() {

    }

    async generateExamQuestions(numberOfQuestions: number, chaptersCsv: string): Promise<void> {

        console.log('generating...', numberOfQuestions)
        this.examQuestions = [];
        
        for (let i = 0; i < numberOfQuestions; i++) {
            // this.examQuestions.push(await cloneDeep(this.questionGenerator.getRandomQuestion()))
            this.examQuestions.push(await this.questionGenerator.getRandomQuestion())
        }

    }

    getMockExamQuestions(): IQuestion[] {
        return this.examQuestions
    }

    getMockExamQuestion(questionIndex: any): IQuestion {
        return this.examQuestions[questionIndex]
    }
    
    setAnswerChoice(currentQuestionIndex: number, choice: AnswerChoice) {
        this.examQuestions[currentQuestionIndex].currentAnswerChoice = choice
    }

    gradeExam(): IGrade {

        let correctAnswers = 0
        let totalQuestions = 0

        const questionGrades: IGradedQuestion[] = this.examQuestions.map( (question: IQuestion) => {
            totalQuestions++

            const gradedQuestion: IGradedQuestion = {
                isCorrect: false,
                correctAnswerChoice: question.shuffledCorrectAnswer,
                userAnswerChoice: question.currentAnswerChoice
            }
            
            if (question.currentAnswerChoice === question.shuffledCorrectAnswer) {
                correctAnswers++
                gradedQuestion.isCorrect = true;
            }

            return gradedQuestion

        })

        const percentageCorrect = Math.round(100 * (correctAnswers / totalQuestions))

        const gradedExam = {
            correctAnswers,
            totalQuestions,
            percentageCorrect,
            questionGrades,
            pass: percentageCorrect > PASSING_CUTOFF_PERCENTAGE
        }

        this.grade = gradedExam

        return gradedExam

    }

    getCurrentGrade(): IGrade {

        if (!this.grade)
            this.gradeExam()

        return this.grade

    }

    resetExam() {
        
        // this.isTimerRunning = false
    
        // this.timerExpired.next(false)
    
        // this.examQuestions = []
    
        // this.examAnswers = []
    
        // this.grade = 
    }

}

