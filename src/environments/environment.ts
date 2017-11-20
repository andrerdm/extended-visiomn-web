// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase : {
    apiKey: "AIzaSyA43bXEoy85QUv1DQLg-AJwdQgLEewcQ-k",
    authDomain: "simpleapprealtime-75302.firebaseapp.com",
    databaseURL: "https://simpleapprealtime-75302.firebaseio.com",
    projectId: "simpleapprealtime-75302",
    storageBucket: "simpleapprealtime-75302.appspot.com",
    messagingSenderId: "153370917721"
  }
  
};
