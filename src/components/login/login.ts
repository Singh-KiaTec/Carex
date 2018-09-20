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
import { UsernamePage } from '../../pages/username/username';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { CPRPage } from '../../pages/cpr/cpr.page';
import { IdverifyPage } from '../../pages/idverify/idverify.page';

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
    private isLoading;
    private userInfo;
    private error = false;
    private showlogin = false;
    private loginData: any;
    private username;
    private password;
    private errormsg;
    private submit;
    private forgetpasswordlabel;
    private cprsaved;
    private checklistdata;


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
        this.isLoading=true;
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

                    //this.showlogin = false;
                    //this.navCtrl.setRoot(HomePage);


                    // this.storageService.get('cprsave').then(
                    //     cprsaved=>{
                    //         this.cprsaved = cprsaved;

                    //         if(cprsaved){
                    //             this.navCtrl.setRoot(HomePage);
                    //         }
                    //         else{
                    //             this.navCtrl.setRoot(NemidPage);
                    //         }

                    //     }
                    // );

                // }
                // else {
                //     this.showlogin = true;
                 }

            }
        );

    }


    login() {
        // this.navCtrl.setRoot(HomePage);
        //  this.navCtrl.setRoot(NemidPage);
        // this.keyboard.close();
        this.isLoading =true;
        this.baserestService.login(this.loginForm.value.userid, this.loginForm.value.password).then(
            userInfo => {
                this.isLoading=false
                this.userInfo = userInfo;
                this.loggedIn(userInfo);
            },
            error => {
                console.log("something went wrong")
                this.error = true;
                this.isLoading =false;
            }

        );



    }
    getloginData() {
        this.baserestService.getloginData().then(
            loginData => {
                this.loginData = loginData;
                this.setData();
                this.isLoading = false
            },
            error => { console.log("error"); this.isLoading = false }
        );

    }
    setData() {
        this.submit = this.loginData.submit;
        this.password = this.loginData.password;
        this.errormsg = this.loginData.errormsg;
        this.forgetpasswordlabel = this.loginData.forgetpassword;
        this.username = this.loginData.username;
    }

    loggedIn(userInfo) {
        if (this.userInfo) {
            this.storageService.set('user', userInfo);
            this.auth.setUserinfo(userInfo);
            this.storageService.set('welcome', true);
            this.user = new User(this.userInfo);

          this.isLoading =true;
            this.baserestService.checkactiveList(userInfo.id).then(
                checklistdata => { this.checklistdata = checklistdata; 
                    this.isLoading  = false;
                    this.storageService.set('checklistdata', checklistdata);
                    this.auth.setuserchecklistData(checklistdata); 
                    this.decideflow();
                   },
                error => { console.log(error);  this.isLoading  = false; this.error = true; }
            );
            // this.navCtrl.setRoot(TermsconditionPage);

        }

    }
    forgetpassword(event) {

        this.navCtrl.push(UsernamePage);


    }

    getEnvi() {
        // window.top.location.href = 'https://test-tryg.carex.dk/';
       // this.loading.dismiss();

    }

    decideflow() {
        //this.auth.setUserinfo(data);
        //  this.navCtrl.setRoot(TermsconditionPage);
    
       if(this.checklistdata && this.checklistdata.result && this.checklistdata.result.GeneralAccept){
                this.storageService.set('terms', this.checklistdata.result.GeneralAccept);
       }
   
        if (!this.checklistdata.result) {
            this.navCtrl.setRoot(IdverifyPage);
        }
        if (this.checklistdata && this.checklistdata.result && this.checklistdata.result.cpr) {
            this.navCtrl.setRoot(HomePage);
        }
        if (this.checklistdata && this.checklistdata.result && !this.checklistdata.result.GeneralAccept) {
            this.navCtrl.setRoot(TermsconditionPage);
        }
        if (this.checklistdata && this.checklistdata.result && !this.checklistdata.result.cpr) {
            this.navCtrl.setRoot(CPRPage);
        }
        if (this.checklistdata && this.checklistdata.result && !this.checklistdata.result.GeneralAccept && !this.checklistdata.result.cpr && !this.checklistdata.result.nemid) {
            this.navCtrl.push(IdverifyPage);
        }
    }

}