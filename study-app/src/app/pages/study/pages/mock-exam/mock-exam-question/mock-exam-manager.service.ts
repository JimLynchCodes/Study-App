import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IQuestion } from "../../../../../data/_data.models/question.model";
import { QuestionGenerator } from "../../../../../utils/question-generator/question-generator.service";

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
            this.examQuestions.push(await this.questionGenerator.getRandomQuestion())
        }

    }

    getMockExamQuestion(questionIndex: any): IQuestion {
        return this.examQuestions[questionIndex]
    }

}

