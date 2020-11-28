import { Test, TestingModule } from '@nestjs/testing';
import { JwtValidatorService } from './jwt-validator.service';

describe('JwtValidatorService', () => {
  let service: JwtValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtValidatorService],
    }).compile();

    service = module.get<JwtValidatorService>(JwtValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
