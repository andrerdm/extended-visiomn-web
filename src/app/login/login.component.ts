import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FirebaseProvider } from '../providers/firebase/FirebaseProvider';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public fp: FirebaseProvider) {
    }

    ngOnInit() {}

    onLoggedin() {
        console.log('Iniciando Login');
        this.fp.signInWithEmailAndPassword('denilson.rv@hotmail.com', ')(*)(8lnlknLKASd!@@')
            .then((data) => {
                console.log('Usuario Logado ' + data.email);
                localStorage.setItem('isLoggedin', 'true');
            }, (error) => {
                console.log(error);
                
                let errorMessage;
                switch (error.code) {
                    case 'auth/invalid-email':
                      errorMessage = 'Insira um email válido.';
                      break;
                    case 'auth/wrong-password':
                      errorMessage = 'Combinação de usuário e senha incorreta.';
                      break;
                    case 'auth/user-not-found':
                      errorMessage = 'Combinação de usuário e senha incorreta.';
                      break;
                    default:
                      errorMessage = error;
                      break;
                }

                alert(errorMessage);
            });
    }
}
