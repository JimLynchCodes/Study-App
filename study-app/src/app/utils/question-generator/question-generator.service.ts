import { Injectable } from "@angular/core";
import { IQuestion, AnswerChoice } from "../../models/question";
import { environment } from '../../../environments/environment'

const ANSWERS: AnswerChoice[] = [
    AnswerChoice.A,
    AnswerChoice.B,
    AnswerChoice.C,
    AnswerChoice.D,
    AnswerChoice.E,
]

@Injectable({
    providedIn: 'root'
})
export class QuestionGenerator {

    questionBank

    ngOnInit() {
        console.log('loading?')
    }
    
    async getQuestionFromValidChapter(selectedChapters: string): Promise<IQuestion> {
        
        console.log('loading question bank... ', `../../data/${environment.theme}/question-bank`)
    
        if (!this.questionBank)

            this.questionBank = (await import(`../../data/${environment.theme}/question-bank`)).questionBank;
    
        console.log("question 1: ", JSON.stringify(this.questionBank))

        const potentialQuestion = this.getRandomQuestion();

        const selectedChaptersToNumbers = selectedChapters.split(',').map(a => +a)

        console.log('chap index: ', potentialQuestion.chapterIndex)
        console.log('chap index: ', +potentialQuestion.chapterIndex)
        console.log('chap index: ', selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex) !== -1)

        if (selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex) !== -1)
            return Promise.resolve(potentialQuestion)

        return this.getQuestionFromValidChapter(selectedChapters)

    }

    getRandomQuestion(): IQuestion {

        const randomIndexWithinBounds = Math.floor(Math.random() * this.questionBank.length);

        return this.shuffleQuestionAnswers(this.questionBank[randomIndexWithinBounds]);
    }

    private shuffleQuestionAnswers(question: IQuestion): IQuestion {

        const shuffledChoices = this.shuffle(Object.keys(question.answerChoices));

        question.shuffledCorrectAnswer = ANSWERS[shuffledChoices.indexOf(question.correctAnswer)]

        question.shuffledAnswerChoices = shuffledChoices.reduce((acc, answerChoice) => {

            return {
                ...acc,
                [answerChoice]: question.answerChoices[answerChoice]
            }
        }, {})

        const orderedShuffledAnswerChoices = {}


        Object.keys(question.shuffledAnswerChoices).forEach((shuffledAnswerChoice, index) => {
            orderedShuffledAnswerChoices[ANSWERS[index]] = question.shuffledAnswerChoices[shuffledAnswerChoice]

            if (shuffledAnswerChoice === question.correctAnswer) {
                question.shuffledCorrectAnswer = ANSWERS[index]
            }

        })

        question.shuffledAnswerChoices = orderedShuffledAnswerChoices

        return question

    }

    private shuffle<T>(array: Array<T>): Array<T> {
        console.log('shuffling...')
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

}