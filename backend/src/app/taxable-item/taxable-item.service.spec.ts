import { Test, TestingModule } from '@nestjs/testing';
import { TaxableItemService } from './taxable-item.service';

describe('TaxableItemService', () => {
  let service: TaxableItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxableItemService],
    }).compile();

    service = module.get<TaxableItemService>(TaxableItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
