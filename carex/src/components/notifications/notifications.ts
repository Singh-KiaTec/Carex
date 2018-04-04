import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsPage } from '../../pages/notifications/notifications.page';

@Component({
    selector:'notifications-viewer',
    templateUrl: 'notifications.html'
})
export class NotificationsComponent {
    rootPage: any = NotificationsPage;

    constructor(
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in notify");
    }
    
}


