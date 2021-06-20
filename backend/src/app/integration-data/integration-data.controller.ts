import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IntegrationDataService } from './integration-data.service';

@ApiTags('Integration Data')
@Controller('integration-data')
export class IntegrationDataController {
  constructor(private integrationDataService: IntegrationDataService) {}
  @Get('/gacAgentSCT')
  getGroupGACAgentData() {
    return this.integrationDataService.getDataFromGacAgent();
  }
  @Get('/dolphin')
  getDolphinData() {
    return this.integrationDataService.getDolphinData();
  }
  @Get('/bunker')
  getBunkerData() {
    return this.integrationDataService.getBunkerData();
  }
  @Get('/taxAuthDocumentTypes')
  getTaxAuthDocumentTypes() {
    return this.integrationDataService.getDocumentTypesFromTax();
  }
}
