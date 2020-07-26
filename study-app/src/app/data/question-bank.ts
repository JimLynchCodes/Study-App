import { IQuestion, AnswerChoice } from "../models/question";

export const questionBank: IQuestion[] = [
    {
        qId: `q1-1`,
        chapterIndex: 1,
        questionIndex: 1,
        tags: ['first question', 'yeah buddy'],
        questionText: 'what?',
        answerChoices: {
            [AnswerChoice.A]: 'chyeah',
            [AnswerChoice.B]: 'ok',
            [AnswerChoice.C]: 'well then',
            [AnswerChoice.D]: 'hmm'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'chyeah is the correct answer because... chyeah.',
            [AnswerChoice.B]: 'although the question is nice, that is not the answer to "what?".',
            [AnswerChoice.C]: 'although the question is nice, that is not the answer to "what?".',
            [AnswerChoice.D]: 'although the question is nice, that is not the answer to "what?".',
            [AnswerChoice.E]: 'although the question is nice, that is not the answer to "what?".',
        },
        moreExplanation: 'The phrase chyeah originated in 1987 when people needed to express yeah in a more cool form.',
    },
    {
        chapterIndex: 1,
        questionIndex: 2,
        qId: `q1-2`,
        tags: ['second question', 'yeah buddy'],
        questionText: 'second question',
        answerChoices: {
            [AnswerChoice.A]: '1',
            [AnswerChoice.B]: '2',
            [AnswerChoice.C]: '3',
            [AnswerChoice.D]: '4',
            [AnswerChoice.E]: '5',
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: 'chyeah is the correct answer because... chyeah.',
            [AnswerChoice.B]: 'although the question is nice, that is not the answer to "what?".',
            [AnswerChoice.C]: 'although the question is nice, that is not the answer to "what?".',
            [AnswerChoice.D]: 'although the question is nice, that is not the answer to "what?".',
            [AnswerChoice.E]: 'although the question is nice, that is not the answer to "what?".',
        },
        moreExplanation: 'The phrase chyeah originated in 1987 when people needed to express yeah in a more cool form.',
    }
]