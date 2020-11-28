import { Test, TestingModule } from '@nestjs/testing';
import { QuestionFeedbackService } from './question-feedback.service';

describe('QuestionFeedbackService', () => {
  let service: QuestionFeedbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionFeedbackService],
    }).compile();

    service = module.get<QuestionFeedbackService>(QuestionFeedbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
