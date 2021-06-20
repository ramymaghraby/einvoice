import { IntegrationDataService } from './integration-data.service';
export declare class IntegrationDataController {
    private integrationDataService;
    constructor(integrationDataService: IntegrationDataService);
    getGroupGACAgentData(): Promise<any[]>;
    getDolphinData(): string;
    getBunkerData(): Promise<any[]>;
    getTaxAuthDocumentTypes(): Promise<any[]>;
}
