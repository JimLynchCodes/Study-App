import { Test, TestingModule } from '@nestjs/testing';
import { QuestionFeedbackController } from './question-feedback.controller';

describe('QuestionFeedbackController', () => {
  let controller: QuestionFeedbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionFeedbackController],
    }).compile();

    controller = module.get<QuestionFeedbackController>(QuestionFeedbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
