import { Test, TestingModule } from '@nestjs/testing';
import { TaxSubTypeService } from './tax-sub-type.service';

describe('TaxSubTypeService', () => {
  let service: TaxSubTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxSubTypeService],
    }).compile();

    service = module.get<TaxSubTypeService>(TaxSubTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
