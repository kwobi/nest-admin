import { Test, TestingModule } from '@nestjs/testing';
import { CatsRatingService } from './cats-rating.service';

describe('CatsRatingService', () => {
  let service: CatsRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsRatingService],
    }).compile();

    service = module.get<CatsRatingService>(CatsRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
