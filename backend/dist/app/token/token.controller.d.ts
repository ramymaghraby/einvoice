import { TokenService } from './token.service';
export declare class TokenController {
    private tokenSrv;
    constructor(tokenSrv: TokenService);
    getGroupGACAgentData(): Promise<any[]>;
    getDolphinData(): string;
    getBunkerData(): Promise<any[]>;
    getTaxAuthDocumentTypes(): Promise<any>;
}
