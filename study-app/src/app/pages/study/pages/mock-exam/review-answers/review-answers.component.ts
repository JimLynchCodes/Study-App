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

    questions = [
        {
            currentAnswer: 'A'
        },
        {
            currentAnswer: 'B'
        },
        {
            currentAnswer: '_'
        },
        {
            currentAnswer: '_'
        },
        {
            currentAnswer: 'D'
        },
        {
            currentAnswer: 'A'
        },
        {
            currentAnswer: 'B'
        }
    ]

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
        })

    }

    ngOnInit(): void {
        console.log('loading up review answers component!')

    }

    onBackToQuestionsBtnTap(): void {
        console.log('onBackToQuestionsBtnTapped')
    }

    submitExamBtnTap(): void {
        console.log('submitExamBtnTapped')
    }

    onViewQuestionTap(): void {
        console.log('onViewQuestionTap')
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
