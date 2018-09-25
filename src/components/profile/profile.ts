import { Component } from '@angular/core';
import { NavParams, Navbar } from 'ionic-angular';
import { ProfilePage } from '../../pages/profile/profile.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { WelcomePage } from '../../pages/welcome/welcome.page'
import { NavController } from 'ionic-angular';
import { StorageService } from '../../providers/storageservice/storageservice'
import { AuthService } from '../../providers/authenticationservice/auth.service';
// import { User } from '../../models/user.model';
// import {WindowRef} from '../../providers/windowservice/windowservice';
// import {Cookie} from 'ng2-cookies';
// import {CookieService} from 'ngx-cookie-service';
import { LoginPage } from '../../pages/login/login.page';
import { CPRPage } from '../../pages/cpr/cpr.page';

@Component({
    selector: 'profile-viewer',
    templateUrl: 'profile.html'
})
export class ProfileComponent {
    rootPage: any = ProfilePage;
    private loggedout;
    private loggedUrl;
    private user: any;
    private profileContent: any;
    private loading: boolean;
    private username;
    private name;
    private email;


    constructor(private baserestService: BaseRestService,
        private navCtrl: NavController,
        private navParam: NavParams,
        private auth: AuthService, private storageService: StorageService) { 
            this.auth.user.subscribe(
                (user) => {
                  {
                  this.user = user;
                  }
                }
              );

        }

    ngOnInit() {
        // Tracking
        this.loggedUrl = this.auth.getEnvironment();
        //  this.user = this.auth.getUserInfo();
      //  this.user = this.navParam.get('userinfo');

        if (this.user.brugernavn) {
            this.username = this.user.brugernavn;
            this.email = this.user.email;
            this.name = this.user.username;
        }
        else {
            this.username = this.user[2];
            this.email = this.user[1];
            this.name = this.user[0];
        }




        console.log(this.user);
        this.baserestService.getProfileContent().then(
            profileContent => { this.profileContent = profileContent; this.setData(); this.loading = false },
            error => { this.loading = false }
        );



    }

    setData() {
        console.log(this.profileContent);
    }



    logout() {
        // this.storageService.clear();
        //this.cookieService.delete('http://udv-admin.carex.dk');
        this.baserestService.logout(this.loggedUrl).then(
            loggedout => {
                this.loggedout = loggedout;
                this.initializeApp()
            },
            error => { console.error(error); this.initializeApp() }

        )
    }
    initializeApp() {
        this.storageService.clear();

        //needds to revert
        this.navCtrl.setRoot(WelcomePage);
    }
}


