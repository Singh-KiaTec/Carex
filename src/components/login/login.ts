import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
// import { LoginPage } from '../../pages/login/login.page';
// import { HeaderComponent } from '../header/header';
import { HomePage } from '../../pages/home/home.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { NemidPage } from '../../pages/nemid/nemid.page';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
// import { CookieService } from 'ngx-cookie-service';
import { StorageService } from '../../providers/storageservice/storageservice';
// import { WindowRef } from '../../providers/windowservice/windowservice';
import { User } from '../../models/user.model';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { Environment } from '../../models/environment.model';
import { AuthService } from '../../providers/authenticationservice/auth.service';
// import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// import $ from "jquery";


@Component({
    selector: 'login-viewer',
    templateUrl: 'login.html'
})
export class LoginComponent {


    private loginForm: FormGroup;
    private source: string = '';
    private userinfo;
    private termsread;
    private user: User;
    private environment;
    private envi: Environment;
    private iframeUrl;
    private loggedUser;
    private loading;
    private userInfo;
    private error = false;
    private showlogin = false;
    private loginData: any;
    private username;
    private password;
    private errormsg;
    private submit;
    private forgetpasswordlabel;


    constructor(private fb: FormBuilder, private navCtrl: NavController,
        private auth: AuthService, private iab: InAppBrowser, private baserestService: BaseRestService, private storageService: StorageService) {
        this.loginForm = this.fb.group({
            userid: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
        // Tracking
        //this.environment = this.auth.getEnvironment();
        this.getloginData();
        //this.userinfo = this.cookieService.get('userdata');

        console.log("in login compinent");
        // this.storageService.get('terms').then(
        //     termsread => {
        //     this.termsread = termsread;
        //         if (this.termsread) {
        //             this.navCtrl.setRoot(TermsconditionPage);
        //         }
        //         else{
        //             this.storageService.set('terms', false);
        //         }
        //     },
        //     error => console.log(error)
        // )


        this.storageService.get('user').then(
            loggedUser => {
                this.loggedUser = loggedUser;
                if (loggedUser) {
                    this.user = new User(loggedUser);

                    this.showlogin = false;
                    this.navCtrl.setRoot(HomePage)
                }
                else {
                    this.showlogin = true;
                }

            }
        )
    }

    login() {
        console.log(this.loginForm.value);
        // this.navCtrl.setRoot(HomePage);
        //  this.navCtrl.setRoot(NemidPage);
        // this.keyboard.close();
        this.baserestService.login(this.loginForm.value.userid, this.loginForm.value.password).then(
            userInfo => {
                this.userInfo = userInfo;
                this.loggedIn();
            },
            error => {
                console.log("something went wrong")
                this.error = true;
            }

        );



    }
    getloginData() {
        this.baserestService.getloginData().then(
            loginData => {
                this.loginData = loginData;
                this.setData();
                this.loading = false
            },
            error => { console.log("error"); this.loading = false }
        );

    }
    setData() {
        this.submit = this.loginData.submit;
        this.password = this.loginData.password;
        this.errormsg = this.loginData.errormsg;
        this.forgetpasswordlabel = this.loginData.forgetpassword;
        this.username = this.loginData.username;
    }

    loggedIn() {
        this.storageService.set('welcome', true);
        if (this.userInfo) {
            this.storageService.set('terms', false);
            console.log(this.userInfo);
            this.user = new User(this.userInfo);
            // this.navCtrl.setRoot(TermsconditionPage);
            this.receiveMessage(this.userInfo);
        } else {
            this.error = true;
        }

    }
    forgetpassword(event) {

        // console.log(event);
        // window.open("https://trygsundhed.carex.dk/simplesaml/module.php/core/forgotpw.php", "_blank");
        this.iab.create('https://trygsundhed.carex.dk/simplesaml/module.php/core/forgotpw.php', "_system", "location=no,hardwareback=yes");

    }

    getEnvi() {
        // window.top.location.href = 'https://test-tryg.carex.dk/';
        this.loading.dismiss();
        // this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://trygsundhed.carex.dk");
        // window.top.location.href = 'https://trygsundhed.carex.dk';
        // console.log(this.iframeUrl);


        //    const browser = this.iab.create('https://app-idp.carex.dk/');

        // var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
        // browser.on('loadstop').subscribe(event => {
        //     if (event) {
        //         console.log(event);
        //     }
        // });

        // browser.on("message").subscribe(data => {
        //     if (data) {
        //         console.log(data);
        //         this.receiveMessage(data);
        //         browser.close();
        //     }
        // });
    }
    // onLoadFunc(myIframe) {
    //     this.source = myIframe //.contentWindow.location.href;
    //     console.log(this.source);

    //     if (this.userinfo) {
    //         var k = decodeURIComponent(this.userinfo);
    //         var e = JSON.parse(k)
    //         // this.navCtrl.setRoot(NemidPage);
    //         //this.navCtrl.setRoot(NemidPage);

    //         this.navCtrl.setRoot(TermsconditionPage);
    //     }
    // }
    receiveMessage(data) {
        console.log("in receive message")
        // console.log(data.data);
        this.auth.setUserinfo(data);
        if (data) {
            this.storageService.set('user', data);
            this.user = new User(data);
            console.log("gottt ssuer")
            this.userinfo = data
            console.log(this.userinfo);
            this.user.id = data[3];
            this.user.email = data[1];
            this.user.username = data[0];
            this.user.status = data[4];
            this.auth.setUserinfo(data);
            this.storageService.set('user', data);
            this.navCtrl.setRoot(TermsconditionPage);
        }
    }

}