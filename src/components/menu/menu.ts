import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
//import {data} from '../../models/data/data';
import { HomePage } from '../../pages/home/home.page';
import { SettingsPage } from '../../pages/settings/settings.page';
import { ProfilePage } from '../../pages/profile/profile.page';
import { NotificationsPage } from '../../pages/notifications/notifications.page';
import { WelcomePage } from '../../pages/welcome/welcome.page';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { OtherRelationsPage } from '../../pages/otherrelations/otherrelations.page';
// import { tryg } from '../../models/data/tryg';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { StorageService } from '../../providers/storageservice/storageservice';
import { ConfigurationService } from '../../providers/utils/configservices';
import { CPRPage } from '../../pages/cpr/cpr.page';
import { IdverifyPage } from '../../pages/idverify/idverify.page';

@Component({
  selector: 'menu-viewer',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  menuList: any;
  rootPage: any;
  private menuItems: any;
  private loading: boolean;
  private environment;
  private userinfo;
  private appVersion;
  private cprsaved;
  private userchecklistdata;

  private testuser;
  private testinguser;

  pages: Array<{ title: string, component: any }>;
  constructor(private baserestService: BaseRestService, private storageService: StorageService, private configurationService: ConfigurationService, private auth: AuthService) {
    this.auth.userchecklistdata.subscribe(
      (userchecklistdata) => {
        {
          this.userchecklistdata = userchecklistdata;
        }
      }
    );
    this.auth.user.subscribe(
      (userinfo) => {
        {
          this.userinfo = userinfo;
        }
      }
    );


  }

  ngOnInit() {
    console.log("in menu");
    let userdata:any='';
    let userchecklistdata:any='';

      this.storageService.checklistdata.then((checklistdata) => {
        // guaranteed reliable
        console.log(checklistdata);
        userchecklistdata  = checklistdata;
        this.auth.setuserchecklistData(checklistdata);
        if(checklistdata){
          if (!userchecklistdata.result){
            this.nav.setRoot(WelcomePage);
          }
        if (userchecklistdata.result && userchecklistdata.result.cpr) {
          //this.rootPage = HomePage;
          this.nav.setRoot(HomePage);
          //this.nav.setRoot('HomePage',{'homedata':this.menuList});
        }
        if (userchecklistdata.result && !userchecklistdata.result.cpr) {
          this.nav.setRoot(CPRPage);
          //setRoot(TabsPage, {userProfile: profile});
        }
        if (userchecklistdata.result && !userchecklistdata.result.nemid) {
          this.nav.setRoot(IdverifyPage);
          //setRoot(TabsPage, {userProfile: profile});
        }
        if (userchecklistdata.result && !userchecklistdata.result.nemid && !userchecklistdata.result.cpr) {
          this.nav.setRoot(WelcomePage);
        }
    }
    if(!checklistdata){
        this.nav.setRoot(WelcomePage);
    }
        });
      

      this.storageService.user.then((user) => {
        // guaranteed reliable
        userdata = user;
        this.userinfo = user;
        console.log(user);
        this.auth.setUserinfo(user);
      });
    // else{
    //   console.log("will hitting welocme ")
    //   this.nav.setRoot(WelcomePage);
    // }


    this.baserestService.getMenuItems().then(
      menuItems => { this.menuItems = menuItems; this.loading = false },
      error => { this.loading = false }
    )
    this.baserestService.getCustomerData().then(
      menuList => { this.menuList = menuList; this.setData(); this.loading = false },
      error => { this.loading = false }
    )


    // this.storageService.get('user').then(
    //   userinfo => {
    //     if (userinfo) {
    //       this.auth.setUserinfo(userinfo);
    //       let userinfodata: any = userinfo;
    //       this.baserestService.checkactiveList(userinfodata.id).then(
    //         checklistdata => { this.decideflow(checklistdata) },
    //         error => { console.log(error) }
    //       );
    //     }
    //   });



    // if (this.userinfo && this.userinfo.id) {
    //   if (this.userchecklistdata && this.userchecklistdata.result && this.userchecklistdata.result.cpr) {
    //     //this.rootPage = HomePage;
    //     this.nav.setRoot('HomePage', { 'homedata': this.menuList });
    //   }
    //   if (this.userchecklistdata && this.userchecklistdata.result && !this.userchecklistdata.result.cpr) {
    //     this.nav.setRoot(CPRPage, { 'userpiddata': this.userchecklistdata.result });
    //     //setRoot(TabsPage, {userProfile: profile});
    //   }
    //   if (this.userchecklistdata && this.userchecklistdata.result && !this.userchecklistdata.result.nemid) {
    //     this.nav.setRoot(NemidPage);
    //     //setRoot(TabsPage, {userProfile: profile});
    //   }
    //   else {
    //     this.nav.setRoot(WelcomePage);
    //   }

      //    this.storageService.get('cprsave').then(
      //      cprsaved=>{
      //   console.log(cprsaved);
      //          this.cprsaved = cprsaved;

      //          if(this.cprsaved =='inaktiv'){
      //          this.rootPage = CPRPage;//  this.navCtrl.setRoot(HomePage);
      //          }
      //          else{
      //           this.rootPage = HomePage;//   this.navCtrl.setRoot(NemidPage);
      //        }

      //     }
      // );
      // this.baserestService.checkactiveList(this.userinfo.id).then(
      //   checklistdata=>{this.checklistdata = checklistdata; this.decideflow(checklistdata)},
      //   error =>{console.log(error)}
      // );
      //this.nav.setRoot(HomePage);
   // }
    // else {

    //   this.storageService.get('user').then(
    //     userinfo => {
    //       if (userinfo) {
    //         this.auth.setUserinfo(userinfo);
    //         let userinfodata: any = userinfo;
    //         this.baserestService.checkactiveList(userinfodata.id).then(
    //           checklistdata => { this.decideflow(checklistdata) },
    //           error => { console.log(error) }
    //         );
    //       }
    //       else {
    //         this.rootPage = WelcomePage;
    //       }
    //     },
    //     error => { this.rootPage = WelcomePage; });

    //   //  this.rootPage = WelcomePage;
    // }

  }
  // // setenvi() {
  //    this.auth.setEnvironment('http://trygsundhed.carex.dk/');
  // // }



  setData() {
    this.auth.setEnvironment('http://trygsundhed.carex.dk/');
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
  decideflow(checklistdata) {
    console.log(checklistdata);
    if (checklistdata.result && checklistdata.result.cpr) {
      //this.rootPage = HomePage;
      this.nav.setRoot(HomePage);
      //this.nav.setRoot('HomePage',{'homedata':this.menuList});
    }
    if (checklistdata.result && !checklistdata.result.cpr) {
      this.nav.setRoot(CPRPage, { 'userpiddata': checklistdata.result });
      //setRoot(TabsPage, {userProfile: profile});
    }
    if (checklistdata.result && !checklistdata.result.nemid) {
      this.nav.setRoot(NemidPage);
      //setRoot(TabsPage, {userProfile: profile});
    }
    if (checklistdata.result && !checklistdata.result.nemid && !checklistdata.result.cpr) {
      this.nav.setRoot(WelcomePage);
    }
    else{
      this.nav.setRoot(WelcomePage);
    }
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
    if (!this.userinfo) {
      this.userinfo = this.auth.getUserInfo();
    }
    this.nav.push(ProfilePage, { 'userinfo': this.userinfo });
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
