import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MockExamManagerService {

    private seconds: number
    private minutes: number
    private hours: number

    timer: BehaviorSubject<string[]>

    timerExpired: BehaviorSubject<boolean>

    constructor() {
        this.initializeTimer();
    }

    initializeTimer() {
        this.timerExpired = new BehaviorSubject(false)
        this.timer = new BehaviorSubject(['--', '--', '--'])
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 5;
    }

    startTimer() {
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
        this.timerExpired.next(true)
    }

    private padWithZeros(num: number): string {
        const max = '00'
        const s = max + num;

        console.log('num', num)
        console.log('s', s)
        const g = s.substr(s.length - max.length);
        console.log('g ', g)
        return g
    }

    getCurrentTime() {

    }

}

