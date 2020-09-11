import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionGenerator } from "~/app/utils/question-generator/question-generator.service";
import { IQuestion, AnswerChoice } from "~/app/data/_data.models/question.model";
import { MockExamManagerService } from "./mock-exam-manager.service";

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

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private questionGenerator: QuestionGenerator,
        private mockExamService: MockExamManagerService) {

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
    
            if (this.currentQuestion.currentAnswerChoice)
                this.answerChoice = this.currentQuestion.currentAnswerChoice
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
    }

    resetQuestion() {
        this.answered = false;
    }

    nextQuestion() {

        this.routerExtensions.navigate(['/meq', { questionIndex: this.currentQuestionIndex + 1 }], {
            transition: {
                name: "fade"
            }
        })

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
