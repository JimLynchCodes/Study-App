import { Component, OnInit, ViewContainerRef, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from '@nativescript/core/application';
import { RouterExtensions, ModalDialogOptions, ModalDialogService } from "@nativescript/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionGenerator } from "~/app/utils/question-generator/question-generator.service";
import { IQuestion, AnswerChoice } from "~/app/data/_data.models/question.model";
import { MockExamManagerService } from "./mock-exam-manager.service";
import { TimesUpModalComponent } from "../times-up.modal";

@Component({
    selector: "FeaturedQuestion",
    templateUrl: "./mock-exam-question.component.html",
    styleUrls: ["./mock-exam-question.component.scss"]
})
export class MockExamQuestionComponent implements OnInit {

    answered: boolean = false;

    hoursRemaining = '00';
    minutesRemaining = '37'
    secondsRemaining = '12'

    textAnswerChoices: string[] = ['', '', '', ''];

    answerChoice: string = ''
    answerChoicesArray: string[];

    currentQuestion: IQuestion

    selectedChapters: number[]
    currentQuestionIndex: number;

    @ViewChild('scrollablePage', {static: false}) private scrollablePage: ElementRef;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private questionGenerator: QuestionGenerator,
        private mockExamService: MockExamManagerService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef) {

        console.log('loading up!')

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }

        if (!mockExamService.isTimerRunning)
            mockExamService.startTimer();

        mockExamService.timer.subscribe(([hours, minutes, seconds]: [string, string, string]) => {

            this.hoursRemaining = hours
            this.minutesRemaining = minutes
            this.secondsRemaining = seconds

        })

        route.params.subscribe(async args => {

            this.currentQuestionIndex = +args.questionIndex

            this.currentQuestion = mockExamService.getMockExamQuestion(this.currentQuestionIndex)
            console.log('currentQuestion: ', this.currentQuestion)

            this.textAnswerChoices = Object.values(this.currentQuestion.shuffledAnswerChoices)
            console.log('textAnswerChoices: ', this.textAnswerChoices)

            this.answerChoicesArray = Object.keys(this.currentQuestion.shuffledAnswerChoices);

            if (this.currentQuestion.currentAnswerChoice) {
                this.answerChoice = this.currentQuestion.currentAnswerChoice
                this.answered = true;
            }
        })

        mockExamService.timerExpired.subscribe(isExpired => {

            console.log('timer expired: ', isExpired);

            if (isExpired) {
                const options: ModalDialogOptions = {
                    viewContainerRef: this.viewContainerRef,
                    fullscreen: false,
                    context: 'foo',
                };

                this.modalService.showModal(TimesUpModalComponent, options)
                    .then(() => {
                        console.log('times up, going to results')

                        setTimeout(() => {

                            this.routerExtensions.navigate(['/results'], {
                                transition: {
                                    name: "fade"
                                }
                            })

                        }, 300)
                    })
            }
        })

    }

    ngOnInit(): void {
        console.log('loading up hello2!')
    }

    onTap(choice: string) {

        console.log('answered with: ', choice);

        this.answerChoice = choice

        console.log('chose it: ', this.answerChoice)

        this.answered = true

        this.mockExamService.setAnswerChoice(this.currentQuestionIndex, choice as AnswerChoice)
    
        setTimeout(() => {
            const scrollableHeight = this.scrollablePage.nativeElement.scrollableHeight;
            this.scrollablePage.nativeElement.scrollToVerticalOffset(scrollableHeight, true)
        }, 300);
    }

    resetQuestion() {
        this.answered = false;
    }

    nextQuestion() {

        const totalNumberOfQuestions = this.mockExamService.getMockExamQuestions().length

        if (this.currentQuestionIndex === totalNumberOfQuestions - 1) {
            console.log('on the last question!')

            this.routerExtensions.navigate(['/review-answers', { indexOfQuestionUserCameFrom: 0 }], {
                transition: {
                    name: "fade"
                }
            })
        }
        else {

            this.routerExtensions.navigate(['/meq', { questionIndex: this.currentQuestionIndex + 1 }], {
                transition: {
                    name: "fade"
                }
            })

        }
    }

    reviewAnswersTap() {

        this.routerExtensions.navigate(['/review-answers', { indexOfQuestionUserCameFrom: this.currentQuestionIndex }], {
            transition: {
                name: "fade"
            }
        })
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
