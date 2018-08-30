// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD5z6ThzDjb-kieNXmpnKr5RZvMExFBQI0",
    authDomain: "aurora-phase-one.firebaseapp.com",
    databaseURL: "https://aurora-phase-one.firebaseio.com",
    projectId: "aurora-phase-one",
    storageBucket: "aurora-phase-one.appspot.com",
    messagingSenderId: "342499673702"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
