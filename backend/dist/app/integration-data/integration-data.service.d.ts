import { HttpService } from '@nestjs/common';
export declare class IntegrationDataService {
    private http;
    constructor(http: HttpService);
    taxApiBaseUrl: string;
    taxBaseUrl: string;
    groupTokenBaseUrl: string;
    groupRedirectUrl: string;
    taxClientId: string;
    taxClientSecret: string;
    getGroupToken(): Promise<any>;
    getDataFromGacAgent(): Promise<any[]>;
    getDolphinData(): string;
    getBunkerData(): Promise<any[]>;
    authAsTaxPayer(): Promise<any>;
    getDocumentTypesFromTax(): Promise<any[]>;
}
