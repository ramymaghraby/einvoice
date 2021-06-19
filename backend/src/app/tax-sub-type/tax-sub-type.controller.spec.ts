import { Test, TestingModule } from '@nestjs/testing';
import { TaxSubTypeController } from './tax-sub-type.controller';
import { TaxSubTypeService } from './tax-sub-type.service';

describe('TaxSubTypeController', () => {
  let controller: TaxSubTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxSubTypeController],
      providers: [TaxSubTypeService],
    }).compile();

    controller = module.get<TaxSubTypeController>(TaxSubTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
