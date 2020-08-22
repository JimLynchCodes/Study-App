import { IQuestion, AnswerChoice } from "../_data.models/question.model";

// TEST / DEV Questions

// export const questionBank: IQuestion[] = [
//
// ]

/**
 * Prod Questions!
 */

export const questionBank: IQuestion[] = [
    {
        chapterIndex: 0,
        questionIndex: 1,
        qId: `q1-1`,
        tags: [],
        questionText: 'what is the SAT?',
        answerChoices: {
            [AnswerChoice.A]: 'A test',
            [AnswerChoice.B]: 'not a test',
            [AnswerChoice.C]: 'a racoon',
            [AnswerChoice.D]: 'a region of africa'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'yes, it\'s a test.',
            [AnswerChoice.B]: 'actually... it is a test.',
            [AnswerChoice.C]: 'No, the SAT is not a racoon.',
            [AnswerChoice.D]: 'No, the SAT is not a region of Africa...',
        },
        moreExplanation: `The SAT is a test...`,
    },
    {
        chapterIndex: 1,
        questionIndex: 1,
        qId: `q1-1`,
        tags: [],
        questionText: 'what is the SAT?',
        answerChoices: {
            [AnswerChoice.A]: 'A test',
            [AnswerChoice.B]: 'not a test',
            [AnswerChoice.C]: 'a racoon',
            [AnswerChoice.D]: 'a region of africa'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'yes, it\'s a test.',
            [AnswerChoice.B]: 'actually... it is a test.',
            [AnswerChoice.C]: 'No, the SAT is not a racoon.',
            [AnswerChoice.D]: 'No, the SAT is not a region of Africa...',
        },
        moreExplanation: `The SAT is a test...`,
    },
  
]