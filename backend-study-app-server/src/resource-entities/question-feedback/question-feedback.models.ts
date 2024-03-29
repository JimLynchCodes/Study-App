
import { ObjectId } from 'mongodb';

export enum FeedbackType {
    reportBug = 'Report a Bug',
    spellingOrGrammer = 'Spelling / Grammar',
    incorrectAnswerOrExplanation = 'Incorrect Answer Or Explanation',
    iHaveAQuestion = 'I Have A Question About This Question',
    somethingWeirdHappened = 'Something Weird Happened...',
    iLikeThisQuestion = 'I Like This Question!'
}

export interface QuestionFeedback {
    _id: ObjectId
    dateSubmitted: Date
    submittedByUserId: ObjectId
    feedbackType: FeedbackType
    feedbackMessage: string
}