import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { IQuestion, AnswerChoice } from "../../../../data/_data.models/question.model";
import { QuestionGenerator } from "../../../../utils/question-generator/question-generator.service";
import { environment } from "../../../../../environments/environment"

@Component({
    selector: "FeaturedQuestion",
    templateUrl: "./fast-feedback-question.component.html",
    styleUrls: ["./fast-feedback-question.scss"]
})
export class FastFeedbackQuestionComponent implements OnInit {

    answered: boolean = false;
    moreDetailsExpanded: boolean = false;
    answeredCorrectly: boolean = undefined;

    content: any;

    textAnswerChoices: string[] = ['', '', '', ''];

    answerChoice: string = undefined
    answerChoicesArray: string[];

    currentQuestion: IQuestion

    selectedChapters: number[]

    @ViewChild('scrollablePage', {static: false}) private scrollablePage: ElementRef;
    
    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private questionGenerator: QuestionGenerator) {


            console.log('loading up!')
            console.log('ffq sees env: ', environment.apiUrl);
            
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            }
            
            route.params.subscribe(async args => {
                
                this.selectedChapters = args.selectedChapters
                
                console.log('selectedChapters: ', this.selectedChapters)
                
                this.currentQuestion = await questionGenerator.getQuestionFromValidChapter(args.selectedChapters)
                
                console.log('selected q: ', this.currentQuestion)
                
                this.textAnswerChoices = Object.values(this.currentQuestion.shuffledAnswerChoices);
                this.answerChoicesArray = Object.keys(this.currentQuestion.shuffledAnswerChoices);
                
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

        if (!this.answered) {

            this.answerChoice = choice

            if (choice === this.currentQuestion.shuffledCorrectAnswer) {
                this.answeredCorrectly = true
            }
            else {
                this.answeredCorrectly = false
            }

            this.answered = true

            setTimeout(() => {
                const scrollableHeight = this.scrollablePage.nativeElement.scrollableHeight;
                this.scrollablePage.nativeElement.scrollToVerticalOffset(scrollableHeight, true)
            }, 300);

        }
    }

    resetQuestion() {
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
