import { AnswerChoice } from "./question.model";

export enum CorrectOrIncorrect {
    correct,
    incorrect
}

export interface IGradedQuestion {
    isCorrect: boolean,
    correctAnswerChoice: AnswerChoice,
    userAnswerChoice: AnswerChoice
}

export interface IGrade {

    correctAnswers: number

    totalQuestions: number

    percentageCorrect: number

    questionGrades: IGradedQuestion[]
    pass: boolean
}