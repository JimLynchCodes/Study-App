import { Injectable } from '@nestjs/common';
import { hardcodedQuestionFeedback } from './question-feedback.hardcoded-data';
import { QuestionFeedback } from './question-feedback.models';
import { MongoService } from '../../util-services/mongo/mongo.service';
import { ObjectId } from 'mongodb';

@Injectable()
export class QuestionFeedbackService {
  constructor(private mongoSvc: MongoService) {}

  async getFeedbackForAllQuestions(
    appName: string,
  ): Promise<QuestionFeedback[]> {
    const db = await this.mongoSvc.getDb(appName);

    return new Promise(async resolve => {
      console.log(
        'process.env.MONGO_QUESTION_FEEDBACK_COLLECTION ',
        process.env.MONGO_QUESTION_FEEDBACK_COLLECTION,
      );

      const result = await db
        .collection(process.env.MONGO_QUESTION_FEEDBACK_COLLECTION)
        .find({})
        .toArray();

      console.log('result is: ', result);
      resolve(result);
    });
  }

  async getAllFeedbackForQuestion(appName: string, questionId: string) {
    const db = await this.mongoSvc.getDb(appName);

    return db.collection(process.env.MONGO_QUESTION_FEEDBACK_COLLECTION).find({
      questionId: new ObjectId(questionId),
    });
  }

  getHardcodedQuestionFeedback(): Promise<QuestionFeedback> {
    return Promise.resolve(hardcodedQuestionFeedback);
  }

  async addSpecificFeedbackForQuestion(
    appName: string,
    questionId: string,
    req: QuestionFeedback,
  ): Promise<QuestionFeedback> {
    const db = await this.mongoSvc.getDb(appName);

    return new Promise(async resolve => {
      const result = await db
        .collection(process.env.MONGO_QUESTION_FEEDBACK_COLLECTION)
        .insertOne({ ...req, questionId });

      resolve(result.ops[0]);
    });
  }
}
