import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { BeaconData } from '../../models/BeaconData';

@Injectable()
export class FirebaseProvider {
  private beaconListRef = this.afDB.list<BeaconData>('/beacons/');

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
    return this.beaconListRef.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

  getUserInfo(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  update(oldBeacon, newBeacon) {
    this.beaconListRef.update(oldBeacon.key, newBeacon);
  }

  delete(b) {
    this.beaconListRef.remove(b);
  }

  create(b) {
    this.beaconListRef.push(b);
  }

}