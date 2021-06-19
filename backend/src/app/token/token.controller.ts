import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TokenService } from './token.service';

@ApiTags('data')
@Controller('data')
export class TokenController {
  constructor(private tokenSrv: TokenService) {}
  @Get('/gacAgentSCT')
  getGroupGACAgentData() {
    return this.tokenSrv.getDataFromGacAgent();
  }
  @Get('/dolphin')
  getDolphinData() {
    return this.tokenSrv.getDolphinData();
  }
  @Get('/bunker')
  getBunkerData() {
    return this.tokenSrv.getBunkerData();
  }
  @Get('/taxAuthDocumentTypes')
  getTaxAuthDocumentTypes() {
    return this.tokenSrv.getDocumentTypesFromTax();
  }
}
