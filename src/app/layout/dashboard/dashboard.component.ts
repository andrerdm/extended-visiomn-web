import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FirebaseProvider } from '../../providers/firebase/FirebaseProvider';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { BeaconData } from '../../models/BeaconData';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public user: string;
    public beaconList: Observable<BeaconData[]>;

    constructor(public fp: FirebaseProvider) {
    }

    ngOnInit() {
        this.beaconList = this.fp.listBeacons();
    }

    edit() {
        alert(2);
    }

    delete() {
        alert(1);
    }

}
