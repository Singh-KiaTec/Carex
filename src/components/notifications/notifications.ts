import { Component } from '@angular/core';
import { NotificationsPage } from '../../pages/notifications/notifications.page';

@Component({
    selector:'notifications-viewer',
    templateUrl: 'notifications.html'
})
export class NotificationsComponent {
    rootPage: any = NotificationsPage;

    constructor(
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in notify");
    }
    
}


