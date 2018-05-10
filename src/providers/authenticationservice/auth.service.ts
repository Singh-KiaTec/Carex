import { Injectable } from '@angular/core';
import { Nav, NavController, App } from 'ionic-angular';
import { StorageService } from '../storageservice/storageservice';


@Injectable()
export class AuthService {
    // URL to web api
    private navCtrl: Nav;
    private nav: any;
    private environmentUrl;
    private user;

    constructor(private app: App, private storageservice: StorageService) {
        //  this.navCtrl = app.getActiveNavs();
    }


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        console.log("in auth servicce");
    }

    setEnvironment(environmentUrl) {
        this.environmentUrl = environmentUrl;
    }
    getEnvironment() {
        return this.environmentUrl;

    }
    setUserinfo(user) {
        this.user = user;
    }
    getUserInfo() {
        return this.user;

    }
}

