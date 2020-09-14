import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionGenerator } from "~/app/utils/question-generator/question-generator.service";
import { IQuestion } from "~/app/data/_data.models/question.model";
import { environment } from "../../../../../../environments/environment"
import { MockExamManagerService } from "../mock-exam-question/mock-exam-manager.service";
import { ModalDialogService, ModalDialogOptions, ModalDialogParams } from "nativescript-angular/common";
import { AreYouSureExamSubmitModalComponent } from "./are-you-sure-exam-submit.modal";
import { TimesUpModalComponent } from "../times-up.modal";

@Component({
    selector: "review-answers",
    templateUrl: "./review-answers.component.html",
    styleUrls: ["./review-answers.component.scss"],
    providers: [ModalDialogService]
})
export class ReviewAnswersComponent implements OnInit {

    hoursRemaining = '00'
    minutesRemaining = '37'
    secondsRemaining = '12'

    indexOfQuestionUserCameFrom: number = 0;

    questions: IQuestion[] = []

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private questionGenerator: QuestionGenerator,
        private mockExamService: MockExamManagerService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }

        mockExamService.timer.subscribe(([hours, minutes, seconds]: [string, string, string]) => {

            this.hoursRemaining = hours
            this.minutesRemaining = minutes
            this.secondsRemaining = seconds
        })

        route.params.subscribe(async args => {
            console.log('got route args: ', args)

            this.indexOfQuestionUserCameFrom = args.indexOfQuestionUserCameFrom
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
                    .then((confirmSubmit: boolean) => {

                        console.log('times up, going to results')
                        if (confirmSubmit) {

                            this.routerExtensions.navigate(['/results'], {
                                transition: {
                                    name: "fade"
                                }
                            })

                        }
                    });
            }
        })

    }

    ngOnInit(): void {
        console.log('loading up review answers component!')

        this.questions = this.mockExamService.getMockExamQuestions();

    }

    onBackToQuestionsBtnTap(): void {
        console.log('onBackToQuestionsBtnTapped')

        this.routerExtensions.navigate(['/meq', { questionIndex: this.indexOfQuestionUserCameFrom }], {
            transition: {
                name: "fade"
            }
        })
    }

    submitExamBtnTap(): void {
        console.log('submitExamBtnTapped')

        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: 'foo',
        };

        this.modalService.showModal(AreYouSureExamSubmitModalComponent, options)
            .then((confirmSubmit: boolean) => {
                if (confirmSubmit)
                    this.submitAreYouSureYes();
            });

    }

    submitAreYouSureYes() {

        this.mockExamService.gradeExam();

        setTimeout(() => {
            this.routerExtensions.navigate(['/results'], {
                transition: {
                    name: "fade"
                }
            })
        }, 300);

    }

    submitAreYouSureCancel() {

    }

    onViewQuestionTap(questionIndex: number): void {
        console.log('onViewQuestionTap', questionIndex)

        this.routerExtensions.navigate(['/meq', { questionIndex }], {
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
