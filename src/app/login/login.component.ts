import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;
    constructor(public router: Router) 
    {
        this.email = "";
        this.password = "";       
    }

    ngOnInit() {}   

    onLoggedin() {
        alert(1);
        alert(this.email);
        alert(this.password);
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}
