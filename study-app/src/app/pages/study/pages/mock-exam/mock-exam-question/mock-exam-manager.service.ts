import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IQuestion, AnswerChoice } from "../../../../../data/_data.models/question.model";
import { QuestionGenerator } from "../../../../../utils/question-generator/question-generator.service";
import { IGrade, IGradedQuestion } from "~/app/data/_data.models/grade.model";
import { EaExam, ExamTime } from "../ea-exam.model";

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

    examQuestions: IQuestion[] = []

    examAnswers: any[]

    grade: IGrade
    examSelected: EaExam;

    constructor(private readonly questionGenerator: QuestionGenerator) {
        this.initializeTimer();
    }

    initializeTimer() {
        this.timerExpired = new BehaviorSubject(false)
        this.timer = new BehaviorSubject([""+this.hours, ""+this.minutes, ""+this.seconds])
    }

    startTimer() {
        console.log('starting timer')
        this.isTimerRunning = true;
        this.timerExpired = new BehaviorSubject(false)
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
        else {
            if (this.isTimerRunning)
                this.tickTimer()
        }

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

    private getNumberOfQuestionsFromTimeSelection(examTime: ExamTime): number {

        switch(examTime) {
            case ExamTime.q100:
                return 100
            case ExamTime.q50:
                return 50
            case ExamTime.q28:
                return 28
            case ExamTime.q15:
                return 15
            case ExamTime.q5:
                return 5
            case ExamTime.q1:
                return 1
            
            default: 
                return 0;
        }

    }

    private getChapterStringFromExamSelection(examSelected: EaExam) {
        return '1,2,3,4,5,6,7,8,9,10,11,12';
    }

    async generateExamQuestions(timeSelection: ExamTime, examSelection: EaExam): Promise<void> {

        console.log('generating exam questions: ', timeSelection, ' ', examSelection)
        
        this.examQuestions = [];
        
        const numberOfQuestions = this.getNumberOfQuestionsFromTimeSelection(timeSelection)
        console.log('generating...', numberOfQuestions)
        
        const chaptersCsv: string = this.getChapterStringFromExamSelection(examSelection)
        
        for (let i = 0; i < numberOfQuestions; i++) {
            console.log('generating exam question ' + (i+1))
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

        const questionGrades: IGradedQuestion[] = this.examQuestions.map((question: IQuestion) => {
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

        this.isTimerRunning = false

        this.timerExpired = new BehaviorSubject(false)

        this.grade = null
    }

    setExamSelected(examSelected: EaExam) {
        this.examSelected = examSelected
    }
    resetTimer(timeSelected: string) {
        
        this.setTimerFromTimeSelected(timeSelected);


        switch(timeSelected) {

            case ExamTime.q100:
                this.hours = 3
                this.minutes = 30
                this.seconds = 0
            break;

            case ExamTime.q50:
                this.hours = 1
                this.minutes = 45
                this.seconds = 0
            break;

            case ExamTime.q28:
                this.hours = 1
                this.minutes = 0
                this.seconds = 0
            break;

            case ExamTime.q15:
                this.hours = 0
                this.minutes = 30
                this.seconds = 0
            break;

            case ExamTime.q5:
                this.hours = 0
                this.minutes = 10
                this.seconds = 0
            break;

            case ExamTime.q1:
                this.hours = 0
                this.minutes = 1
                this.seconds = 0
            break;

        }

        // this.seconds++ // bonus second

    }

    private setTimerFromTimeSelected(timeSelected:string) {
        console.log('setting timer based on : ', timeSelected)
    }

    getCurrentExam(): EaExam {
        return this.examSelected
    }

}

