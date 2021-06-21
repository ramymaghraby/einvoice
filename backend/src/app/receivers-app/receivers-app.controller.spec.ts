import { Test, TestingModule } from '@nestjs/testing';
import { ReceiversAppController } from './receivers-app.controller';
import { ReceiversAppService } from './receivers-app.service';

describe('ReceiversAppController', () => {
  let controller: ReceiversAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiversAppController],
      providers: [ReceiversAppService],
    }).compile();

    controller = module.get<ReceiversAppController>(ReceiversAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
