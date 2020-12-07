import { QuestionFeedback, FeedbackType } from "./question-feedback.models";
import { ObjectId } from 'mongodb';

export const hardcodedQuestionFeedback: QuestionFeedback = {
    _id: new ObjectId('111111111111111111111111'),
    dateSubmitted: new Date(),
    submittedByUserId: new ObjectId('111111111111111111111111'),
    feedbackType: FeedbackType.reportBug,
    feedbackMessage: 'foo'
}