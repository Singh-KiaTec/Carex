import { Component, ViewChild } from '@angular/core';
// import { WelcomePage } from '../../pages/welcome/welcome.page';
// import { welcome } from '../../models/data/welcome';
import { LoginPage } from '../../pages/login/login.page';
import { HomePage } from '../../pages/home/home.page';
import { CPRPage } from '../../pages/cpr/cpr.page';
import { NemidPage } from '../../pages/nemid/nemid.page';
// import { HeaderComponent } from '../header/header';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { Nav, LoadingController } from 'ionic-angular';
import { StorageService } from '../../providers/storageservice/storageservice';
import { AuthService } from '../../providers/authenticationservice/auth.service';
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
    private isLoading=false;
    private continue;
    private userchecklistdata;
    private userinfo;

    constructor(private baserestService: BaseRestService, public loadingCtrl: LoadingController, private storageService: StorageService, private auth: AuthService) {
        this.auth.userchecklistdata.subscribe(
            (userchecklistdata) => {
              {
              this.userchecklistdata = userchecklistdata;
              }
            }
          );
          this.auth.user.subscribe(
            (userinfo) => {
              {
              this.userinfo = userinfo;
              }
            }
          );

     }

    ngOnInit() {
        // Tracking
        console.log("in welcome");
        this.isLoading = true;
    
    //     let loading = this.loadingCtrl.create({
    //         content: 'loading...',
    //         duration: 10000
    //     });
    //   loading.present();
    //     loading.onDidDismiss(() => {
    //       console.log('Dismissed loading');
    //     });
      
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


        
        // if (this.userinfo) {
        //     if(this.userchecklistdata && this.userchecklistdata.result && this.userchecklistdata.result.cpr){
              
        //       this.nav.setRoot(HomePage);
        //     }
        //     if(this.userchecklistdata && this.userchecklistdata.result && !this.userchecklistdata.result.cpr){
        //       this.nav.setRoot(CPRPage);
        //       //setRoot(TabsPage, {userProfile: profile});
        //     }
        //     if(this.userchecklistdata && this.userchecklistdata.result && !this.userchecklistdata.result.nemid){
        //       this.nav.setRoot(NemidPage);
        //       //setRoot(TabsPage, {userProfile: profile});
        //     }

        // }  
    }
    updateCucumber(){
        console.log(this);
    }
    getWelcomeData() {
        this.baserestService.getWelcomeData().then(
            welcomeData => {
            this.welcomedata = welcomeData;
                this.setData(); this.isLoading = false
            },
            error => { console.log("error"); this.isLoading = false }
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
