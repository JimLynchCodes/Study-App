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
    
    getQuestionFromValidChapter(selectedChapters: number[]): IQuestion {

        const potentialQuestion = this.getTotallyRandomQuestion();

        if (selectedChapters.indexOf(potentialQuestion.chapterIndex) !== -1)
            return potentialQuestion
        
        return this.getQuestionFromValidChapter(selectedChapters)

    }

    getTotallyRandomQuestion(): IQuestion {

        console.log('getting q...');

        const randomIndexWithinBounds = Math.floor(Math.random() * questionBank.length);

        return this.shuffleQuestionAnswers(questionBank[randomIndexWithinBounds]);
    }

    private shuffleQuestionAnswers(question: IQuestion): IQuestion {
        
        const originalAnswerChoices = Object.keys(question.answerChoices);

        const shuffledAnswerChoices = this.shuffle(originalAnswerChoices);
        
        const newQuestionAnswersRecord = shuffledAnswerChoices.reduce( (acc, answerChoice) => {    
            acc[answerChoice] = question.answerChoices[answerChoice];
            return acc;
        }, {})

        return {
            ...question,
            answerChoices: newQuestionAnswersRecord as Record<AnswerChoice, string>
        }

    }

    private shuffle<T> (array: Array<T>): Array<T> {
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