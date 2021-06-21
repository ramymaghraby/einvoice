import { Test, TestingModule } from '@nestjs/testing';
import { ReceiversAppService } from './receivers-app.service';

describe('ReceiversAppService', () => {
  let service: ReceiversAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiversAppService],
    }).compile();

    service = module.get<ReceiversAppService>(ReceiversAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
