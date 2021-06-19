import { Component } from '@angular/core';
// import { MsalService } from '@azure/msal-angular';
// import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-app';

  constructor(
    // private msalService: MsalService
  ){

  }

  // login(){
  //   this.msalService.loginPopup().subscribe((resp: AuthenticationResult)=>{
  //     this.msalService.instance.setActiveAccount(resp.account)
  //   });
  // }
}
