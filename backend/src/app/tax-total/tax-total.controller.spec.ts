import { Test, TestingModule } from '@nestjs/testing';
import { TaxTotalController } from './tax-total.controller';
import { TaxTotalService } from './tax-total.service';

describe('TaxTotalController', () => {
  let controller: TaxTotalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxTotalController],
      providers: [TaxTotalService],
    }).compile();

    controller = module.get<TaxTotalController>(TaxTotalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
