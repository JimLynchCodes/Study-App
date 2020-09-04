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

    // answered: boolean = false;

    // hoursRemaining = '00';
    // minutesRemaining = '37'
    // secondsRemaining = '12'

    // textAnswerChoices: string[] = ['', '', '', ''];

    // answerChoice: string = ''
    // answerChoicesArray: string[];

    // currentQuestion: IQuestion

    // selectedChapters: number[]

    constructor(
        // private router: Router,
        // private routerExtensions: RouterExtensions,
        // private route: ActivatedRoute,
        // private questionGenerator: QuestionGenerator,
        // private mockExamService: MockExamManagerService) {

        // console.log('loading up!')
        // console.log('MOCK EXAM LOADING UOOPP!@P#!@#! @#d', environment.apiUrl);

        // this.router.routeReuseStrategy.shouldReuseRoute = function () {
        //     return false;
        // }

        // mockExamService.startTimer();
        // mockExamService.timer.subscribe(([hours, minutes, seconds]: [string, string, string]) => {

        //     this.hoursRemaining = hours
        //     this.minutesRemaining = minutes
        //     this.secondsRemaining = seconds

        //     //
        //     console.log(`got a new time! ${hours}:${minutes}:${seconds}`)

        ) {}

    //     route.params.subscribe(async args => {

    //         // this.selectedChapters = args.selectedChapters
    //         // this.selectedChapters = [1, 2, 3]

    //         console.log('selectedChapters: ', this.selectedChapters)

    //         this.currentQuestion = await questionGenerator.getQuestionFromValidChapter('1,2,3')
    //         // this.currentQuestion = await questionGenerator.getQuestionFromValidChapter(args.selectedChapters)

    //         console.log('selected q: ', this.currentQuestion)

    //         this.textAnswerChoices = Object.values(this.currentQuestion.shuffledAnswerChoices);
    //         this.answerChoicesArray = Object.keys(this.currentQuestion.shuffledAnswerChoices);

    //     })

    // }

    ngOnInit(): void {
        console.log('loading up hello2!')

    }

    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>app.getRootView();
    //     sideDrawer.showDrawer();
    // }

    // onTap(choice: string) {

    //     console.log('answered with: ', choice);

    //     this.answerChoice = choice

    //     console.log('chose it: ', this.answerChoice)

    //     this.answered = true

    // }

    // resetQuestion() {
    //     this.answered = false;
    // }

    // nextQuestion() {

    //     this.routerExtensions.navigate(['/ffq', { selectedChapters: this.selectedChapters }], {
    //         transition: {
    //             name: "fade"
    //         }
    //     })
    // }

}
