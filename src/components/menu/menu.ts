import { Component, ViewChild} from '@angular/core';
import { Nav,NavController } from 'ionic-angular';
import {data} from '../../models/data/data';
import { HomePage } from '../../pages/home/home.page';
import { SettingsPage } from '../../pages/settings/settings.page';
import { ProfilePage } from '../../pages/profile/profile.page';
import { NotificationsPage } from '../../pages/notifications/notifications.page';

@Component({
    selector: 'menu-viewer',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    @ViewChild(Nav) nav: Nav;

    menuList:any = data ;
    rootPage: any = HomePage;

    pages: Array<{title: string, component: any}>;
    constructor() {
    }

    ngOnInit() {
        console.log("in menu");
            //this.menuLis;
    let pagesarray=[]; 
 
    for(let i in this.menuList){
      pagesarray.push({
       title: this.menuList[i].organisation, 
       component: HomePage,
       pageData:this.menuList[i],
       index: i 
      });
    }
    this.pages = pagesarray;
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let item = page.pageData;
    let itemIndex = page.index;
    console.log(page);
    this.nav.setRoot(page.component,{'pageData':item,'itemIndex':itemIndex});
  }
  openProfile(){
    this.nav.push(ProfilePage,{});
  }
  openNotifications(){
    this.nav.push(NotificationsPage,{'resultData':''});
  }
  openSettings(){
    this.nav.push(SettingsPage,{});
  }


}
