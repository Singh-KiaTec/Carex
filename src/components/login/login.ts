import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login.page';
import { HeaderComponent } from '../header/header';
import { HomePage } from '../../pages/home/home.page';
import { FormArray, FormBuilder, FormGroup, Validator, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from '../../providers/storageservice/storageservice';
import { WindowRef } from '../../providers/windowservice/windowservice';
import { User } from '../../models/user.model';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { Environment } from '../../models/environment.model';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { Keyboard } from '@ionic-native/keyboard';

import $ from "jquery";


@Component({
    selector: 'login-viewer',
    templateUrl: 'login.html'
})
export class LoginComponent {

    @ViewChild('myIframe') iframe = HTMLIFrameElement;


    private loginForm: FormGroup;
    private source: string = '';
    private userinfo;
    private termsread;
    private user: User;
    private environment;
    private envi: Environment;
    private iframeUrl;
    constructor(private fb: FormBuilder, private navCtrl: NavController,
        private keyboard: Keyboard,
        private auth: AuthService, private sanitizer: DomSanitizer, private baserestService: BaseRestService, private cookieService: CookieService, private storageService: StorageService, private windowRef: WindowRef) {
        this.loginForm = this.fb.group({
            userid: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
        // Tracking
       //this.environment = this.auth.getEnvironment();
        console.log(this.iframe);
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
        this.getEnvi();


        console.log(this.windowRef.nativeWindow);
        window.addEventListener("message", (data) => {
            console.log(data);
            this.receiveMessage(data);
        }, false)
        //   this.windowRef.nativeWindow.event.message(this.receiveMessage);
    }
    login() {
        console.log(this.loginForm.value);
        // this.navCtrl.setRoot(HomePage);
        //  this.navCtrl.setRoot(NemidPage);
        this.storageService.set('terms', true);
        this.keyboard.close();
        this.navCtrl.setRoot(TermsconditionPage);
    }
    getEnvi() {
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://trygsundhed.carex.dk");
        console.log(this.iframeUrl);


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
        if (data.data && !data.data.messageId) {
            let userdata = JSON.parse(data.data);
            this.user = new User(userdata);
            if (userdata.id) {
                console.log("gottt ssuer")
                this.userinfo = data.data
                console.log(this.userinfo);
                this.user.id = userdata.id;
                this.user.email = userdata.email;
                this.user.username = userdata.username;
                this.user.status = userdata.gyldighed;
                this.user.group = userdata.group;
                this.auth.setUserinfo(this.user);
                this.navCtrl.setRoot(TermsconditionPage);
            }
            // this.navCtrl.setRoot(TermsconditionPage);
        }
    }

}