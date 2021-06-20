"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationDataService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const ClientOAuth2 = require('client-oauth2');
let IntegrationDataService = class IntegrationDataService {
    constructor(http) {
        this.http = http;
        this.taxApiBaseUrl = 'https://api.preprod.invoicing.eta.gov.eg';
        this.taxBaseUrl = 'https://id.preprod.eta.gov.eg';
        this.groupTokenBaseUrl = 'https://login.microsoftonline.com/6e9db74c-11b7-459e-b199-9f044662d260/oauth2';
        this.groupRedirectUrl = 'https://iodeu-shd-apg01.portal.azure-api.net/docs/services/api-dev-auth/console/oauth2/authorizationcode/callback';
        this.taxClientId = 'fe9358b8-333b-4586-8594-11908801f066';
        this.taxClientSecret = '4f35aef9-2432-411d-86be-ff7fe315e03b';
    }
    async getGroupToken() {
        const token = new ClientOAuth2({
            clientId: 'e1195be9-cb92-477e-b7a5-ec04b92d780f',
            clientSecret: 'Hrliid?l/Q-om@RYSVqMANVkp3O0Cg31',
            accessTokenUri: this.groupTokenBaseUrl + '/token',
            authorizationUri: this.groupTokenBaseUrl + '/authorize',
            redirectUri: this.groupRedirectUrl
        });
        const toktok = await token.credentials.getToken().then((receivedToken) => {
            return receivedToken.data;
        });
        return toktok;
    }
    async getDataFromGacAgent() {
        const dataFromGACAgent = [];
        const token = await this.getGroupToken();
        const headersRequest = {
            'Content-Type': 'application/json',
            Authorization: token.token_type + ' ' + token.access_token,
            Applicationinstancecode: 'GAEG04',
            'Ocp-Apim-Subscription-Key': 'a64dff36e363463d815dc839c1b69998',
        };
        const params = {
            invoiceNumber: '',
            invoiceStartDate: '05-02-2021',
            invoiceEndDate: '05-02-2021',
            instanceCode: 'GAEG04',
        };
        try {
            const { data: searchResponse } = await axios_1.default.get(`https://api-beta-testing.gac.com/external/shipping/dev/v1/GetInvoiceDetailsinJson?invoiceNumber=${params.invoiceNumber}&invoiceStartDate=${params.invoiceStartDate}&invoiceEndDate=${params.invoiceEndDate}&instanceCode=${params.instanceCode}`, { headers: headersRequest });
            for (let index = 0; index < searchResponse.length; index++) {
                dataFromGACAgent.push(searchResponse[index]);
            }
        }
        catch (error) {
            console.log(error);
        }
        return dataFromGACAgent;
    }
    getDolphinData() {
        return 'Dolphin Data';
    }
    async getBunkerData() {
        const dataFromBunker = [];
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        const params = {
            InvoiceNo: 'B-21038',
            DateFrom: '',
            DateTo: '',
        };
        try {
            const { data: bunkerDataResponse } = await axios_1.default.get(`http://api.gacegy.local/api/Invoice/Bunker?InvoiceNo=${params.InvoiceNo}`, { headers: headersRequest });
            dataFromBunker.push(bunkerDataResponse);
        }
        catch (error) {
            console.log(error);
        }
        return dataFromBunker;
    }
    async authAsTaxPayer() {
        const token = new ClientOAuth2({
            clientId: this.taxClientId,
            clientSecret: this.taxClientSecret,
            accessTokenUri: this.taxBaseUrl + '/connect/token',
            authorizationUri: this.taxBaseUrl + 'connect/authorize',
        });
        const toktok = await token.credentials.getToken().then((receivedToken) => {
            return receivedToken.data;
        });
        return toktok;
    }
    async getDocumentTypesFromTax() {
        const documentTypesfromTax = [];
        const token = await this.authAsTaxPayer();
        const headersRequest = {
            Authorization: token.token_type + ' ' + token.access_token,
        };
        try {
            const { data: documentTypeResponse } = await axios_1.default.get(this.taxApiBaseUrl + '/api/v1/documenttypes', { headers: headersRequest });
            documentTypesfromTax.push(documentTypeResponse);
        }
        catch (error) {
            console.log(error.message);
        }
        return documentTypesfromTax;
    }
};
IntegrationDataService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], IntegrationDataService);
exports.IntegrationDataService = IntegrationDataService;
//# sourceMappingURL=integration-data.service.js.map