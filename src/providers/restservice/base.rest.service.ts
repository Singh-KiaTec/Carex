import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Nav, NavController, App } from 'ionic-angular';
import { NotificationsPage } from '../../pages/notifications/notifications.page'
import { LoginPage } from '../../pages/login/login.page';
import { StorageService } from '../storageservice/storageservice';
import { Http } from '@angular/http/src/http';
import { HTTP } from '@ionic-native/http';
import { Platform } from 'ionic-angular';


@Injectable()
export class BaseRestService {
    // URL to web api
    // private navCtrl: Nav;
    private nav: any;
    //rootPage: any = LoginPage;
    private headers;
    private options;
    //private platform: Platform;
    private baseUrl = '/';//"http://udv-admin.carex.dk/config/jsondata/";
    constructor(private app: App, private storageservice: StorageService, private http: HttpClient, private platform:Platform) {
        //  this.navCtrl = app.getActiveNavs();
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            "Access-Control-Allow-Headers": "X-Requested-With"
        });
        if (platform.is('mobile')) {
            this.baseUrl = "http://udv-admin.carex.dk/config/";
        }
        this.options = new RequestOptions({ headers: this.headers });
    }
    // URL to web api


    ionViewDidEnter() {
        console.log(this.app.getActiveNavs());
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.app.getActiveNavs());
        this.getPlatform();
        console.log(this.baseUrl);
    }
    getPlatform() {
        if (this.platform.is('mobile')) {
            this.baseUrl = "http://udv-admin.carex.dk/config/";
        }
    }
    pushNotification(resultData) {
        //this.nav = this.app.getRootNavById('n4');
        // if (this.nav._views[1].name != "NotificationsPage") {
        //    // this.storageservice.validatesetNotification('allstorednotifications', resultData);
        //    this.nav.push(NotificationsPage, { 'resultData': resultData });//WOR
        // }
        // this.app.getActiveNavs().push(NotificationsPage,{'resultData': resultData});
        //WORKS this.app.getRootNav().push(NotificationsPage,{'resultData': resultData});
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
    navigateTo(pagename, options) {
        console.log(pagename);

        //this.nav = this.app.getRootNavById('n4');
        let navoptions = options ? options : {};

        //this.navCtrl.push(LoginPage);
        //this.nav.push(LoginPage);//WOR
        //  this.app.getRootNav().push(LoginPage,navoptions);
        //this.nav.setRoot(LoginPage);
        //this.app.getActiveNavs().push('LoginPage');
        // this.app.getActiveNavs()[0].push(LoginPage);
        //this.nav.pop(0);
        //WORKS
        this.app.getRootNav().push(LoginPage);
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
    getWelcomeData() {
 
        //return this.http.get(this.baseUrl + 'jsondata/welcome.json', this.options).toPromise();
        return this.http.get('/jsondata/welcome.json', this.options).toPromise();
    }
    getTermsandconditionsData() {
       // this.getPlatform();
        console.log(this.baseUrl);
        return this.http.get('/jsondata/termsandconditions.json', this.headers).toPromise();
      //  return this.http.get('http://udv-admin.carex.dk/config/jsondata/termsandconditions.json', this.options).toPromise();
    }
    getCustomerData() {
        console.log(this.baseUrl);
        return this.http.get('/jsondata/tryg.json', this.options).toPromise();
    }
    getsmartSearchData(){
        return this.http.get('/jsondata/smartsearch.json', this.options).toPromise();
    }
    logout(url){
        return this.http.get(url+'/logout.php', this.options).toPromise();
    }
    getEnvironment(){
        return this.http.get('/jsondata/envi.json', this.options).toPromise();
    }
    getOtherRelations() { 
         console.log(this.baseUrl);
         return this.http.get('/jsondata/otherrelations.json', this.headers).toPromise();
     }
}

