import { Component } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile.page';
import {BaseRestService} from '../../providers/restservice/base.rest.service';
import {WelcomePage} from '../../pages/welcome/welcome.page'
import { NavController } from 'ionic-angular';
import {StorageService} from '../../providers/storageservice/storageservice'
import {AuthService} from '../../providers/authenticationservice/auth.service';
import { User } from '../../models/user.model';

@Component({
    selector:'profile-viewer',
    templateUrl: 'profile.html'
})
export class ProfileComponent {
    rootPage: any = ProfilePage;
    private loggedout;
    private loggedUrl;
    private user:User;
    

    constructor(private baserestService:BaseRestService, private navCtrl: NavController, private auth: AuthService,private storageService: StorageService) { }

    ngOnInit() {
        // Tracking


  this.loggedUrl = this.auth.getEnvironment();
  this.user = this.auth.getUserInfo();
  console.log(this.user);
    }
    
    logout(){
        this.baserestService.logout(this.loggedUrl).then(
           loggedout => {this.loggedout = loggedout;
            this.initializeApp()},
           error=>{console.error(error); this.initializeApp()}
            
        )
    }
    initializeApp(){
        this.storageService.clear();
        this.navCtrl.setRoot(WelcomePage);
    }
}


