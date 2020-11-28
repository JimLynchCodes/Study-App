import { Test, TestingModule } from '@nestjs/testing';
import { UserIdentityService } from './user-identity.service';

describe('UserIdentityService', () => {
  let service: UserIdentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserIdentityService],
    }).compile();

    service = module.get<UserIdentityService>(UserIdentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
