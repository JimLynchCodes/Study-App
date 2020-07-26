
export enum AnswerChoice {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E'
}

type PartialRecord<K extends keyof any, T> =  Partial<Record<K, T>>

export interface IQuestion {
        qId: string,
        chapterIndex: number,
        questionIndex: number,
        tags: string[],
        questionText: string,
        answerChoices: PartialRecord<AnswerChoice, string>,
        correctAnswer: AnswerChoice,
        explanations: PartialRecord<AnswerChoice, string>,
        moreExplanation: string
}