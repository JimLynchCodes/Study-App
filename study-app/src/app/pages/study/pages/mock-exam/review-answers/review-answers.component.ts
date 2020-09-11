import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionGenerator } from "~/app/utils/question-generator/question-generator.service";
import { IQuestion } from "~/app/data/_data.models/question.model";
// import { IQuestion, AnswerChoice } from "../../../../data/_data.models/question.model";
// import { QuestionGenerator } from "../../../../utils/question-generator/question-generator.service";
import { environment } from "../../../../../../environments/environment"
import { MockExamManagerService } from "../mock-exam-question/mock-exam-manager.service";

@Component({
    selector: "review-answers",
    templateUrl: "./review-answers.component.html",
    styleUrls: ["./review-answers.component.scss"]
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
        private mockExamService: MockExamManagerService
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

        this.submitAreYouSureYes();

    }

    submitAreYouSureYes() {
        
        this.mockExamService.gradeExam();
        
        this.routerExtensions.navigate(['/results'], {
            transition: {
                name: "fade"
            }
        })

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
