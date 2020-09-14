import { Injectable } from "@angular/core";
import { IQuestion, AnswerChoice } from "../../data/_data.models/question.model";
import { environment } from '../../../environments/environment'
import { LoaderService } from "~/app/utils/loader.service";

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

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        console.log('loading?')
    }

    async getQuestionFromValidChapter(selectedChapters: string): Promise<IQuestion> {

        if (!this.questionBank)
            this.questionBank = await this.loaderService.getQuestionBank();

        console.log("question 1: ", JSON.stringify(this.questionBank))

        const potentialQuestion = await this.getRandomQuestion();

        const selectedChaptersToNumbers = selectedChapters.split(',').map(a => +a)

        console.log('chap index: ', potentialQuestion.chapterIndex)
        console.log('chap index: ', +potentialQuestion.chapterIndex)
        console.log('chap index: ', selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex) !== -1)

        if (selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex) !== -1)
            return Promise.resolve(potentialQuestion)

        return this.getQuestionFromValidChapter(selectedChapters)

    }

    async getRandomQuestion(): Promise<IQuestion> {

        if (!this.questionBank)
            this.questionBank = await this.loaderService.getQuestionBank();

        console.log('bank is: ', this.questionBank)

        const randomIndexWithinBounds = Math.floor(Math.random() * this.questionBank.length);

        console.log('getting q from bank: ', this.questionBank.length)

        return {
            ...this.shuffleQuestionAnswers(this.questionBank[randomIndexWithinBounds]),
            currentAnswerChoice: null
        }
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