import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings.page';

@Component({
    selector:'settings-viewer',
    templateUrl: 'settings.html'
})
export class SettingsComponent {
    rootPage: any = SettingsPage;

    constructor(
       // private navCtrl: NavController
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in settings");
    }
    
}


