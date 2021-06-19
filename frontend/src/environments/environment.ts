// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:'http://localhost:3000',
  taxAuthSrvBaseUrl: 'https://id.preprod.eta.gov.eg',
  taxApiBaseUrl:'https://api.preprod.invoicing.eta.gov.eg',
  microsoftToken:'https://login.microsoftonline.com/6e9db74c-11b7-459e-b199-9f044662d260/oauth2/token',
  groupDolphin: '',
  groupGACAgent: 'https://api-beta-testing.gac.com/external/shipping/dev/v1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
