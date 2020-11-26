import { Controller, Get, Post } from '@nestjs/common';

@Controller('question-feedback')
export class QuestionFeedbackController {

    @Get('hello')
    getHello(): string {
        return 'question-feedback hello'
    }

    @Get(':app/')
    getFeedbackForAllQuestions() {

    }

    @Get(':app/:questionId')
    getFeedbackForQuestion() {

    }

    @Post(':app/:questionId')
    addNewFeedbackForQuestion() {

    }

}
