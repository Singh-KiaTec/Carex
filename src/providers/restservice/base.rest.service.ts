import { Injectable } from '@angular/core';
import { Nav, NavController, App } from 'ionic-angular';
import { NotificationsPage } from '../../pages/notifications/notifications.page'
import { LoginPage } from '../../pages/login/login.page';
import { StorageService } from '../storageservice/storageservice';


@Injectable()
export class BaseRestService {
    // URL to web api
   // private navCtrl: Nav;
    private nav: any;
    //rootPage: any = LoginPage;
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
        //this.nav = this.app.getRootNavById('n4');
        // if (this.nav._views[1].name != "NotificationsPage") {
        //    // this.storageservice.validatesetNotification('allstorednotifications', resultData);
        //    this.nav.push(NotificationsPage, { 'resultData': resultData });//WOR
        // }
        // this.app.getActiveNavs().push(NotificationsPage,{'resultData': resultData});
        //WORKS this.app.getRootNav().push(NotificationsPage,{'resultData': resultData});
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
    navigateTo(pagename, options){
        console.log(pagename);

      //this.nav = this.app.getRootNavById('n4');
        let navoptions = options? options: {};
    
        //this.navCtrl.push(LoginPage);
      //this.nav.push(LoginPage);//WOR
     //  this.app.getRootNav().push(LoginPage,navoptions);
       //this.nav.setRoot(LoginPage);
        //this.app.getActiveNavs().push('LoginPage');
       // this.app.getActiveNavs()[0].push(LoginPage);
        //this.nav.pop(0);
        //WORKS
         this.app.getRootNav().push(LoginPage);
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
}

