import { Injectable } from '@angular/core';
import { Nav, App } from 'ionic-angular';
import { StorageService } from '../storageservice/storageservice';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthService {
    // URL to web api
    private navCtrl: Nav;
    private nav: any;
    private environmentUrl;
    private homedata;
    private usernemiddata;

    public userchecklistdata = new BehaviorSubject<any>([]);
    public user = new BehaviorSubject<any>([]); //new Subject<string>(); 

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
    setUserinfo(value:any) {
        this.user.next(value);
    }
    getUserInfo() {
        return this.user;

    }
    setHomedata(homedata) {
        this.homedata = homedata;
    }
    getHomedata() {
        return this.homedata;

    }
    getUsernemiddata(){
        return this.usernemiddata;
    }
    setUsernemiddata(usernemiddata){
         this.usernemiddata = usernemiddata;
    }
    getuserchecklistData(){
        return this.userchecklistdata;
    }
    setuserchecklistData(value:any){
        this.userchecklistdata.next(value); 
        // this.userchecklistdata = userchecklistdata;
    }
    
}

