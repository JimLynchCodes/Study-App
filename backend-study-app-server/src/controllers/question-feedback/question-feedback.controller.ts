import { Controller, Get } from '@nestjs/common';

@Controller('question-feedback')
export class QuestionFeedbackController {

    @Get('hello')
    getHello(): string {
        return 'question-feedback hello'
    }
}
