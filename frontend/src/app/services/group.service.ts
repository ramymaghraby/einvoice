import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient,
    private groupToken: AuthService

  ) { }

  getParty(partyCode:string) {
    return this.http.get(environment.groupDolphin)
  }

  async getInvoiceByNumber(invNumber: string, invStartDate: string, invEndDate: string, instanceCode: string){
    const token = await this.groupToken.getGroupToken()
    // .subscribe((token: any) => {
    //   const receivedToken: string = token.tokenType + ' ' + token.accessToken;
    //   const httpHeaders = new HttpHeaders();
    //   httpHeaders.set('Authorization', receivedToken)
    //     .set('Ocp-Apim-Subscription-Key', 'a64dff36e363463d815dc839c1b69998')
    //     .set('Applicationinstancecode', 'GAEG04');
    //   return httpHeaders;
    // })

    console.log(token)

      // return this.http.get(environment.groupGACAgent + `GetInvoiceDetailsinJson?invoiceNumber=${invNumber}&invoiceStartDate=${invStartDate}&invoiceEndDate=${invEndDate}&instanceCode=${instanceCode}`,
      //  {headers: header});

  }
}
