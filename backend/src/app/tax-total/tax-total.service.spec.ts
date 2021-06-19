import { Test, TestingModule } from '@nestjs/testing';
import { TaxTotalService } from './tax-total.service';

describe('TaxTotalService', () => {
  let service: TaxTotalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxTotalService],
    }).compile();

    service = module.get<TaxTotalService>(TaxTotalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
