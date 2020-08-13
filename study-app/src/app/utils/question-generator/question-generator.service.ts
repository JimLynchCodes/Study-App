import { Injectable } from "@angular/core";
import { questionBank } from "../../data/question-bank";
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

    getQuestionFromValidChapter(selectedChapters: string): IQuestion {

        const potentialQuestion = this.getRandomQuestion();

        console.log('selectedChapters: ', selectedChapters)
        console.log('selectedChapters type: ', typeof selectedChapters)
        console.log('selectedChapters type: ', JSON.stringify(selectedChapters))
        console.log('potential selected: ', potentialQuestion)

        const selectedChaptersToNumbers = selectedChapters.split(',').map(a => +a)

        console.log('found? ', selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex))

        if (selectedChaptersToNumbers.indexOf(+potentialQuestion.chapterIndex) !== -1)
            return potentialQuestion

        return this.getQuestionFromValidChapter(selectedChapters)

    }

    getRandomQuestion(): IQuestion {

        console.log('getting q...');

        const randomIndexWithinBounds = Math.floor(Math.random() * questionBank.length);

        return this.shuffleQuestionAnswers(questionBank[randomIndexWithinBounds]);
    }

    private shuffleQuestionAnswers(question: IQuestion): IQuestion {

        // return question
        // const originalAnswerChoices = Object.keys(question.answerChoices);

        const shuffledChoices = this.shuffle(Object.keys(question.answerChoices));



        // ANSWERS.forEach( answerChoice => {
        //     if ()
        // })

        question.shuffledCorrectAnswer = ANSWERS[shuffledChoices.indexOf(question.correctAnswer)]

        console.log('original correct: ', question.correctAnswer, ' ', question.answerChoices[question.correctAnswer])

        // let i = 0;

        question.shuffledAnswerChoices = shuffledChoices.reduce((acc, answerChoice) => {

            // i++;

            return {
                ...acc,
                [answerChoice]: question.answerChoices[answerChoice]
            }
        }, {})

        // relabel answers, remember
        const orderedShuffledAnswerChoices = {}
        
        
        Object.keys(question.shuffledAnswerChoices).forEach( (shuffledAnswerChoice, index) => {
            
            console.log('looping over answer: ', shuffledAnswerChoice, ' ', index)
            console.log('setting choice: ', ANSWERS[index], ' to ', question.shuffledAnswerChoices[shuffledAnswerChoice])
            
            
            
            orderedShuffledAnswerChoices[ANSWERS[index]] = question.shuffledAnswerChoices[shuffledAnswerChoice]
            
            if (shuffledAnswerChoice === question.correctAnswer) {
                question.shuffledCorrectAnswer = ANSWERS[index]
                console.log('set correct choice, ', ANSWERS[index], ' to ', question.shuffledAnswerChoices[index])

            }
            
        })
        console.log('ord5: ', orderedShuffledAnswerChoices)
        
        question.shuffledAnswerChoices = orderedShuffledAnswerChoices

        console.log('shuff: ', question.shuffledAnswerChoices)
        
        question.shuffledCorrectAnswer = ANSWERS[0]

        console.log('shuffled correct: ', question.shuffledCorrectAnswer, ' ', question.shuffledAnswerChoices[question.shuffledCorrectAnswer])
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