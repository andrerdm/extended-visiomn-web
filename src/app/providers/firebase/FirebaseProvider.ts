import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { BeaconData } from '../../models/BeaconData';

@Injectable()
export class FirebaseProvider {

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  listBeacons(): Observable<any[]> {
    return this.afDB.list('/beacons/').valueChanges();
  }

  getUserInfo(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  update() {
    
  }

  delete() {

  }

}