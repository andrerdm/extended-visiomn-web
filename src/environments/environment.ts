// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase : {
    apiKey: "AIzaSyA8NPBbRS-mTAnun7G24NgF_lPzhiTmif0",
    authDomain: "extended-vision-64c3e.firebaseapp.com",
    databaseURL: "https://extended-vision-64c3e.firebaseio.com",
    projectId: "extended-vision-64c3e",
    storageBucket: "extended-vision-64c3e.appspot.com",
    messagingSenderId: "893367303017"
  }
};
