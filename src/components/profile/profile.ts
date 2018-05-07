import { Component } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile.page';
import {BaseRestService} from '../../providers/restservice/base.rest.service';
import {WelcomePage} from '../../pages/welcome/welcome.page'
import { NavController } from 'ionic-angular';
import {StorageService} from '../../providers/storageservice/storageservice'

@Component({
    selector:'profile-viewer',
    templateUrl: 'profile.html'
})
export class ProfileComponent {
    rootPage: any = ProfilePage;
    private loggedout;

    constructor(private baserestService:BaseRestService, private navCtrl: NavController, private storageService: StorageService) { }

    ngOnInit() {
        // Tracking
  console.log("in profile");
    }
    
    logout(){
        this.baserestService.logout().then(
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


