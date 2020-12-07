import { Controller, Get, Post, Param, Request } from '@nestjs/common';
import { QuestionFeedback } from './question-feedback.models';
import { hardcodedQuestionFeedback } from './question-feedback.hardcoded-data';
import { QuestionFeedbackService } from './question-feedback.service';

@Controller('question-feedback')
export class QuestionFeedbackController {

    constructor(private qFeedbackSvc: QuestionFeedbackService) { }

    @Get('hello')
    getHello(): string {
        return 'question-feedback hello'
    }

    @Get(':app/')
    getFeedbackForAllQuestions(
        @Param('app') appName: string,
        @Request() req: QuestionFeedback
    ): Promise<QuestionFeedback[]> {

        console.log('getting all users for ', appName)
        return this.qFeedbackSvc.getFeedbackForAllQuestions(appName)
    }

    @Get(':app/hardcoded')
    getHardcodedQuestionFeedback(@Request() req: QuestionFeedback) {
        return this.qFeedbackSvc.getHardcodedQuestionFeedback()
    }

    @Get(':app/:questionId')
    getAllFeedbackForQuestion(
        @Param('app') appName: string,
        @Param('questionId') questionId: string,
        @Request() req: QuestionFeedback
    ) {
        return this.qFeedbackSvc.getAllFeedbackForQuestion(appName, questionId)
    }


    @Post(':app/:questionId')
    addSpecificFeedbackForQuestion(
        @Param('app') appName: string,
        @Param('questionId') questionId: string,
        @Request() req: QuestionFeedback
    ): Promise<any> {

        return this.qFeedbackSvc.addSpecificFeedbackForQuestion(appName, questionId, req)

    }

}
