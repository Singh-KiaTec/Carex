import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
//import {data} from '../../models/data/data';
import { HomePage } from '../../pages/home/home.page';
import { SettingsPage } from '../../pages/settings/settings.page';
import { ProfilePage } from '../../pages/profile/profile.page';
import { NotificationsPage } from '../../pages/notifications/notifications.page';
import { WelcomePage } from '../../pages/welcome/welcome.page';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { OtherRelationsPage } from '../../pages/otherrelations/otherrelations.page';
// import { tryg } from '../../models/data/tryg';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import {StorageService} from '../../providers/storageservice/storageservice';

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
  private environment;
  private userinfo;

  pages: Array<{ title: string, component: any }>;
  constructor(private baserestService: BaseRestService, private storageService :StorageService, private auth: AuthService ) {
  }

  ngOnInit() {
    console.log("in menu");
    //this.menuLis;

    this.baserestService.getEnvironment().then(
      envi => {
        console.log(envi);
        this.environment = envi; this.setenvi();
      },
      error => console.error(error)

    )
    this.baserestService.getMenuItems().then(
      menuItems => { this.menuItems = menuItems; this.setData(); this.loading = false },
      error => { this.loading = false }
    )
    this.baserestService.getCustomerData().then(
      menuList => { this.menuList = menuList; this.setData(); this.loading = false },
      error => { this.loading = false }
    )

    // this.userinfo = this.auth.getUserInfo();
    // console.log(this.userinfo);

  //   this.storageService.get('user').then(
  //     userinfo => {
  //         if (userinfo) {
  //             this.userinfo = userinfo;
  //         }}
  // );


  this.storageService.get('user').then(
    userinfo => {
      if (userinfo) {
        this.userinfo = userinfo;
      }
    },
    error => { console.log(error) }
  );



  }
  getMenuItems() {

  }
  setenvi() {
    this.auth.setEnvironment(this.environment.envi.environment);
  }



  setData() {
    let pagesarray = [];
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
    if(!this.userinfo){
      this.userinfo = this.auth.getUserInfo();
    }
    this.nav.push(ProfilePage, { 'userinfo': this.userinfo});
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
