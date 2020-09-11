import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { IQuestion } from "../../../../../data/_data.models/question.model";
import { QuestionGenerator } from "../../../../../utils/question-generator/question-generator.service";
import { environment } from "../../../../../../environments/environment"
import { MockExamManagerService } from "../mock-exam-question/mock-exam-manager.service";

@Component({
    selector: "ReviewQuestion",
    templateUrl: "./review-question.component.html",
    styleUrls: ["./review-question.scss"]
})
export class ReviewQuestionComponent implements OnInit {

    answered: boolean = false;
    moreDetailsExpanded: boolean = false;
    answeredCorrectly: boolean = undefined;

    content: any;

    textAnswerChoices: string[] = ['', '', '', ''];

    answerChoice: string = undefined
    answerChoicesArray: string[];

    currentQuestion: IQuestion

    selectedChapters: number[]
    examQuestionIndex: number;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private questionGenerator: QuestionGenerator,
        private mockExamService: MockExamManagerService) {

        console.log('loading up!')
        console.log('ffq sees env: ', environment.apiUrl);

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }

        route.params.subscribe(async args => {

            // this.selectedChapters = args.selectedChapters

            console.log('received question index: ', args.questionIndex)

            this.examQuestionIndex = +args.questionIndex
            // this.currentQuestion = await questionGenerator.getQuestionFromValidChapter(args.selectedChapters)

            this.currentQuestion = this.mockExamService.getMockExamQuestion(args.questionIndex)

            console.log('selected q: ', this.currentQuestion)

            this.textAnswerChoices = Object.values(this.currentQuestion.shuffledAnswerChoices);
            this.answerChoicesArray = Object.keys(this.currentQuestion.shuffledAnswerChoices);

            this.answerChoice = this.currentQuestion.currentAnswerChoice

            if (this.currentQuestion.currentAnswerChoice === this.currentQuestion.shuffledCorrectAnswer) {
                this.answeredCorrectly = true
            }
            else {
                this.answeredCorrectly = false
            }

            this.answered = true

        })

    }

    ngOnInit(): void {
        console.log('loading up hello2!')

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(choice: string) {

        console.log('answered with: ', choice);

        // if (!this.answered) {


        // }
    }

    resetQuestion() {
        this.answered = false;
        this.moreDetailsExpanded = false;
        this.answeredCorrectly = undefined;
    }

    reviewNextQ() {
        this.routerExtensions.navigate(['/review-question', { questionIndex: ++this.examQuestionIndex }], {
            transition: {
                name: "fade"
            }
        })
    }

    toggleDetailsExpanded() {
        this.moreDetailsExpanded = !this.moreDetailsExpanded
    }

    backToResultsBtn() {
        this.routerExtensions.navigate(['/results'], {
            transition: {
                name: "fade"
            }
        })
    }

}
