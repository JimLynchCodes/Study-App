import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { IQuestion, AnswerChoice } from "../../../../models/question";
import { QuestionGenerator } from "../../../../utils/question-generator/question-generator.service";

@Component({
    selector: "FeaturedQuestion",
    templateUrl: "./fast-feedback-question.component.html",
    styleUrls: ["./fast-feedback-question.scss"]
})
export class FastFeedbackQuestionComponent implements OnInit {

    answered: boolean = false;
    moreDetailsExpanded: boolean = false;
    answeredCorrectly: boolean = undefined;

    feedbackMessage = ''

    content: any;

    textAnswerChoices: string[] = ['', '', '', ''];

    // questionText: string = 'A domestic LLC with at least two members that does NOT file Form 8832 is classified as a ____________ for Federal income tax purposes.'

    answerChoice: string = undefined
    answerChoicesArray: string[];

    currentQuestion: IQuestion

    selectedChapters: number[]

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private questionGenerator: QuestionGenerator) {

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }

        route.params.subscribe(args => {

            // this.currentQuestion = questionGenerator.getTotallyRandomQuestion();

            this.selectedChapters = args.selectedChapters.split(',')

            this.currentQuestion = questionGenerator.getQuestionFromValidChapter(args.selectedChapters)

            this.textAnswerChoices = Object.values(this.currentQuestion.answerChoices);
            this.answerChoicesArray = Object.keys(this.currentQuestion.answerChoices);

        })

    }

    ngOnInit(): void { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(choice: string) {

        console.log('answered with: ', choice);

        if (!this.answered) {

            this.answerChoice = choice

            if (choice === this.currentQuestion.correctAnswer) {
                this.feedbackMessage = 'That\'s CORRECT!'
                this.answeredCorrectly = true
            }
            else {
                this.answeredCorrectly = false
                this.feedbackMessage = `Sorry, ${this.currentQuestion.correctAnswer} is correct.`
            }

            this.answered = true

        }
    }

    resetQuestion() {
        this.feedbackMessage = ''
        this.answered = false;
        this.moreDetailsExpanded = false;
        this.answeredCorrectly = undefined;
    }

    nextQuestion() {

        this.routerExtensions.navigate(['/ffq', {selectedChapters: this.selectedChapters }], {
            transition: {
                name: "fade"
            }
        })
    }

    toggleDetailsExpanded() {
        this.moreDetailsExpanded = !this.moreDetailsExpanded
    }

}
