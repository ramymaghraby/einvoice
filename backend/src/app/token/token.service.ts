import { HttpService, Injectable } from '@nestjs/common';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ClientOAuth2 = require('client-oauth2');
@Injectable()
export class TokenService {
  constructor(private http: HttpService) {}
  taxApiBaseUrl = 'https://api.preprod.invoicing.eta.gov.eg';
  taxBaseUrl = 'https://id.preprod.eta.gov.eg';
  groupTokenBaseUrl = 'https://login.microsoftonline.com/6e9db74c-11b7-459e-b199-9f044662d260/oauth2'; 
  groupRedirectUrl ='https://iodeu-shd-apg01.portal.azure-api.net/docs/services/api-dev-auth/console/oauth2/authorizationcode/callback';
  taxClientId = 'fe9358b8-333b-4586-8594-11908801f066';
  taxClientSecret = '4f35aef9-2432-411d-86be-ff7fe315e03b';


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
      'Content-Type': 'application/json', // afaik this one is not needed
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
      const { data: searchResponse } = await axios.get(
        `https://api-beta-testing.gac.com/external/shipping/dev/v1/GetInvoiceDetailsinJson?invoiceNumber=${params.invoiceNumber}&invoiceStartDate=${params.invoiceStartDate}&invoiceEndDate=${params.invoiceEndDate}&instanceCode=${params.instanceCode}`,
        { headers: headersRequest },
      );
      for (let index = 0; index < searchResponse.length; index++) {
        dataFromGACAgent.push(searchResponse[index]);
      }
    } catch (error) {
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
      const { data: bunkerDataResponse } = await axios.get(
        `http://api.gacegy.local/api/Invoice/Bunker?InvoiceNo=${params.InvoiceNo}`,
        { headers: headersRequest },
      );
      dataFromBunker.push(bunkerDataResponse);
    } catch (error) {
      console.log(error);
    }
    return dataFromBunker;
  }
  async authAsTaxPayer(){

    const token = new ClientOAuth2({
      clientId: this.taxClientId,
      clientSecret: this.taxClientSecret,
      accessTokenUri:this.taxBaseUrl + '/connect/token',
      authorizationUri: this.taxBaseUrl + 'connect/authorize',
    });
    const toktok = await token.credentials.getToken().then((receivedToken) => {      
      return receivedToken.data;
    });
    return toktok;
}

async getDocumentTypesFromTax() {
  let documentTypesfromTax
  const token = await this.authAsTaxPayer();
  const headersRequest = {
    // 'Content-Type': 'application/json', // afaik this one is not needed
    Authorization: token.token_type + ' ' + token.access_token,
    // 'Accept-Language': 'ar'
  }
  try {
     const {data: documentTypeResponse } = await axios.get( this.taxApiBaseUrl + '/api/v1/documenttypes', {headers: headersRequest})
     documentTypesfromTax = documentTypeResponse;
     
  } catch (error) {
    console.log(error.message);    
  }
  return documentTypesfromTax;

}
}