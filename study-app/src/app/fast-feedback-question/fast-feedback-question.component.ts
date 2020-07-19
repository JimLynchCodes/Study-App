import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

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

    content: any

    // questionText: string = 'A domestic LLC with at least two members that does NOT file Form 8832 is classified as a ____________ for Federal income tax purposes.'

    answerChoice: string = undefined
    
    questionBank = [
        {
            chapterIndex: 1,
            questionIndex: 1,
            tags: ['first question', 'yeah buddy'],
            questionText: 'what?',
            answerChoices: [
                'chyeah', 'nice', 'ok', 'wow'
            ],
            correctAnswer: 'A',
            explanations: {
                'A': 'chyeah is the correct answer because... chyeah.', 
                'B': 'although the question is nice, that is not the answer to "what?".', 
                'C': 'The answer could be ok, but it\'s actually chyeah.', 
                'D': 'I know, you are so amazed... chyeah.'
            }, 
            moreExplanation: 'The phrase chyeah originated in 1987 when people needed to express yeah in a more cool form.',
        },
        {
            chapterIndex: 1,
            questionIndex: 2,
            tags: ['second question', 'yeah buddy'],
            questionText: 'second question',
            answerChoices: [
                '1', '2', '3', '4'
            ],
            correctAnswer: '4',
            explanations: [
                'chyeah is the correct answer because... chyeah.', 
                'although the question is nice, that is not the answer to "what?".', 
                'The answer could be ok, but it\'s actually chyeah.', 
                'I know, you are so amazed... chyeah.'
            ], 
            moreExplanation: 'The phrase chyeah originated in 1987 when people needed to express yeah in a more cool form.',
        }
    ]
    
    currentQuestion = this.questionBank[0]

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
        // Use the component constructor to inject providers.
        
        this.content = `<p>hello! thereeee</p>`
        
    }

    ngOnInit(): void {
        // Init your component properties here.

        this.route.params.subscribe( params => {

            console.log('Params ', params);
            console.log('Params question', params.question);
            
            if (params.question === 'q1-1') {
                console.log('Params ', params);
                // this.questionText = 'some other question...'
            }

        })

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(choice: string) {

        console.log('tapping answer: ', choice)

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

    resetQuestion() {

        this.feedbackMessage = ''
        this.answered = false;
        this.moreDetailsExpanded = false;
        this.answeredCorrectly = undefined;
    }

    nextQuestion() {
        this.routerExtensions.navigate(['ffq' + '/q1-2'], {
            transition: {
                name: "fade"
            }

        })
    }

    toggleDetailsExpanded() {
        this.moreDetailsExpanded = !this.moreDetailsExpanded
    }

}
