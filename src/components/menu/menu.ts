import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
//import {data} from '../../models/data/data';
import { HomePage } from '../../pages/home/home.page';
import { SettingsPage } from '../../pages/settings/settings.page';
import { ProfilePage } from '../../pages/profile/profile.page';
import { NotificationsPage } from '../../pages/notifications/notifications.page';
import { WelcomePage } from '../../pages/welcome/welcome.page';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { OtherRelationsPage } from '../../pages/otherrelations/otherrelations.page';
import { tryg } from '../../models/data/tryg';
import { BaseRestService } from '../../providers/restservice/base.rest.service';

@Component({
  selector: 'menu-viewer',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  menuList: any;
  rootPage: any = WelcomePage;
  private menuItems: any;
  private loading: boolean;

  pages: Array<{ title: string, component: any }>;
  constructor(private baserestService: BaseRestService) {
  }

  ngOnInit() {
    console.log("in menu");
    //this.menuLis;

    this.baserestService.getMenuItems().then(
      menuItems => { this.menuItems = menuItems; this.setData(); this.loading = false },
      error => { this.loading = false }
    )
    this.baserestService.getCustomerData().then(
      menuList => { this.menuList = menuList; this.setData(); this.loading = false },
      error => { this.loading = false }
    )



    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];
  }
  getMenuItems() {

  }

  setData() {
    let pagesarray = [];
    console.log(this.menuItems.menu.appName);
    for (let i in this.menuList) {
      pagesarray.push({
        title: this.menuList[i].organisation,
        component: HomePage,
        pageData: this.menuList[i],
        index: i
      });
    }
    this.pages = pagesarray;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let item = page.pageData;
    let itemIndex = page.index;
    console.log(page);
    this.nav.setRoot(page.component, { 'pageData': item, 'itemIndex': itemIndex });
  }
  openProfile() {
    this.nav.push(ProfilePage, {});
  }
  openNotifications() {
    this.nav.push(NotificationsPage, { 'resultData': '' });
  }
  openSettings() {
    this.nav.push(SettingsPage, {});
  }
  openTermsandCondition() {
    this.nav.push(TermsconditionPage, { 'menupage': true });
  }
  gotoPage() {
    this.nav.push(OtherRelationsPage, {});
  }

}
