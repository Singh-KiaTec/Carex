import { Injectable } from '@angular/core';
import { Nav, NavController, App } from 'ionic-angular';
import { NotificationsPage } from '../../pages/notifications/notifications.page'
import { StorageService } from '../storageservice/storageservice';


@Injectable()
export class BaseRestService {
    // URL to web api
    private navCtrl: Nav;
    private nav: any;

    constructor(private app: App, private storageservice: StorageService) {
        //  this.navCtrl = app.getActiveNavs();
    }

    ionViewDidEnter() {
        console.log(this.app.getActiveNavs());
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.app.getActiveNavs());
    }

    pushNotification(resultData) {
        this.nav = this.app.getRootNavById('n4');
        if (this.nav._views[1].name != "NotificationsPage") {
           // this.storageservice.validatesetNotification('allstorednotifications', resultData);
           this.nav.push(NotificationsPage, { 'resultData': resultData });//WOR
        }
        // this.app.getActiveNavs().push(NotificationsPage,{'resultData': resultData});
        //WORKS this.app.getRootNav().push(NotificationsPage,{'resultData': resultData});
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
}

