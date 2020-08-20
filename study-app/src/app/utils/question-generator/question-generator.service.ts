import { Injectable } from "@angular/core";
// import { questionBank } from "../../data/enrolled-agent/question-bank";
import { IQuestion, AnswerChoice } from "../../models/question";

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

    async ngOnInit() {

        this.questionBank = (await import(`../../data/${environment.theme}/question-bank`)).questionBank;

        console.log("question 1: ", JSON.stringify(this.questionBank[0]))

    }

    getQuestionFromValidChapter(selectedChapters: string): IQuestion {

        const potentialQuestion = this.getRandomQuestion();

        const selectedChaptersToNumbers = selectedChapters.split(',').map(a => +a)

        if (selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex) !== -1)
            return potentialQuestion

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