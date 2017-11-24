import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { routerTransition } from '../router.animations';
import * as firebase from 'firebase/app';
import { FirebaseProvider } from '../providers/firebase/firebase'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public email: string = "";
    public password: string = "";
    public errorMessage: string;
    

    constructor(public apm: Router, public fp: FirebaseProvider) {      
    }

    ngOnInit() {}   

    onLoggedin() {
        alert(this.email);
        alert(this.password)
        
        this.email = "denilson.rv@hotmail.com";
        this.password = ")(*)(8lnlknLKASd!@@";
        console.log("Iniciando Login");

        this.fp.signInWithEmailAndPassword(this.email, this.password)
            .then((data) => {
                //mover pra proxima tela
                alert("Usuario Logado "+ data.email);
                this.apm.navigateByUrl('/dashboard').then((result) => {
                    console.log(result);
                },(error) =>{

                    console.log(error);
                });
                console.log(data);
            }, (error) => {
                console.log(error);
                switch (error.code) {
                    case 'auth/invalid-email':
                      this.errorMessage = 'Insira um email válido.';
                      break;
                    case 'auth/wrong-password':
                      this.errorMessage = 'Combinação de usuário e senha incorreta.';
                      break;
                    case 'auth/user-not-found':
                      this.errorMessage = 'Combinação de usuário e senha incorreta.';
                      break;
                    default:
                      this.errorMessage = error;
                      break;
                }

                alert(this.errorMessage);

            });


    
    }
}
