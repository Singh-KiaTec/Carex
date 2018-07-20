import { Component, ViewChild } from '@angular/core';
// import { WelcomePage } from '../../pages/welcome/welcome.page';
// import { welcome } from '../../models/data/welcome';
import { LoginPage } from '../../pages/login/login.page';
import { HomePage } from '../../pages/home/home.page';
// import { HeaderComponent } from '../header/header';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { Nav } from 'ionic-angular';
import { StorageService } from '../../providers/storageservice/storageservice';
// import { AuthService } from '../../providers/authenticationservice/auth.service';


@Component({
    selector: 'welcome-viewer',
    templateUrl: 'welcome.html'
})
export class WelcomeComponent {
    @ViewChild(Nav) nav: Nav;

    //  rootPage: any = WelcomePage;


    private welcomedata: any;
    private heading: any;
    private paragraphs;
    private condition;
    private loading;
    private continue;

    constructor(private baserestService: BaseRestService, private storageService: StorageService) { }

    ngOnInit() {
        // Tracking
        this.loading = true;
        this.getWelcomeData();
    
           // this.user = this.auth.getUserInfo();
        // this.storageService.get('welcome').then(
        //     welcome => {
        //         this.welcomeread = welcome;
        //         if (welcome) {
        //             //this.checkUser();
        //             this.baserestService.navigateTo(LoginPage, null);
        //         }
        //         else {
        //             this.storageService.set('welcome', false);
        //         }
        //     },
        //     error => console.log(error)
        // )
        // if (!this.user) {
        //     this.baserestService.navigateTo(HomePage,this.user);
        // }
    }
    getWelcomeData() {
        this.baserestService.getWelcomeData().then(
            welcomeData => {
            this.welcomedata = welcomeData;
                this.setData(); this.loading = false
            },
            error => { console.log("error"); this.loading = false }
        );

    }
    setData() {
        this.heading = this.welcomedata.info.heading;
        this.paragraphs = this.welcomedata.info.paragraphs;
        this.condition = this.welcomedata.info.conditions;
        this.continue = this.welcomedata.info.continue;
    }
    gotoLogin() {
        console.log("go to login");
        // this.nav.pop();
        //this.nav.setRoot(LoginPage);
        this.storageService.set('welcome', true);
        this.baserestService.navigateTo(LoginPage, null);

        //this.navCtrl.setRoot(LoginPage, {});
        // this.navCtrl.setRoot(HomePage, {});
    }
    // checkUser() {

    //     if (!this.user) {
    //         this.user = this.auth.getUserInfo();
    //     }
    //     if (this.user) {
    //         this.baserestService.navigateTo(HomePage, null);
    //     }
    //     else {
    //         this.baserestService.navigateTo(LoginPage, null);
    //     }

    // }
}
