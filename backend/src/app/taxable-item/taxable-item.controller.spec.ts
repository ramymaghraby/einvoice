import { Test, TestingModule } from '@nestjs/testing';
import { TaxableItemController } from './taxable-item.controller';
import { TaxableItemService } from './taxable-item.service';

describe('TaxableItemController', () => {
  let controller: TaxableItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxableItemController],
      providers: [TaxableItemService],
    }).compile();

    controller = module.get<TaxableItemController>(TaxableItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
