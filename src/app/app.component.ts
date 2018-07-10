import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home.page';
// import { ListPage } from '../pages/list/list';
import { data } from '../../src/models/data/data'
// import { Title } from '@angular/platform-browser/src/browser/title';
// import { MenuPage } from '../pages/menu/menu.page';
// import { NotificationsPage } from '../pages/notifications/notifications.page';
// import { NavParams, NavController, Content, Navbar } from 'ionic-angular';
// import { OneSignal } from '@ionic-native/onesignal';
import { StorageService } from '../providers/storageservice/storageservice';
import { BaseRestService } from '../providers/restservice/base.rest.service';
import { Pro } from '@ionic/pro';
// import { WelcomePage } from '../pages/welcome/welcome.page';
import { Keyboard } from '@ionic-native/keyboard';
import { ConfigurationService } from '../providers/utils/configservices';
//declare var cordova: any;
const updateTimerInterval: number = 14400000;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // @ViewChild('myNav') nav: NavController

  public rootPage: any = HomePage;
  private updateTimer: any;
  private isReadyForUpdateCheck: boolean = true;
  public deployChannel = 'master';
  public downlaodProgress = 0;



  pages: Array<{ title: string, component: any }>;
  menuList: any = data;

  constructor(public platform: Platform, public statusBar: StatusBar, public keyboard: Keyboard, public splashScreen: SplashScreen,
    // private oneSignal: OneSignal ,
    public configurationService: ConfigurationService,
    public baserestService: BaseRestService, public storageService: StorageService) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#dc0000');
      this.keyboard.disableScroll(true);
      this.splashScreen.hide();
      //this.oneSignal.startInit("86c266d2-3554-4095-97c5-6efc0ac1e91a", "599014675139");

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      // var notificationOpenedCallback = function(resultData) {
      //   console.log('notificationOpenedCallback: ' + JSON.stringify(resultData));
      //   console.log(jsonData);
      // };



      // window["plugins"].OneSignal
      //   .startInit("86c266d2-3554-4095-97c5-6efc0ac1e91a", "599014675139")
      //   .handleNotificationOpened(this.notificationOpenedCallback.bind(this))
      //   .handleNotificationReceived(this.notificationReceived.bind(this))
      //   .endInit();


      // this.oneSignal.handleNotificationReceived().subscribe((resultData) => {
      //   // do something when notification is received

      //   this.storageService.validatesetNotification('allstorednotifications',resultData);
      //   console.log(resultData);
      // });

      // this.oneSignal.handleNotificationOpened().subscribe((resultData) => {
      //   // do something when a notification is opened
      //   console.log('notificationOpenedCallback: ' + JSON.stringify(resultData));
      //   console.log(resultData);
      //   this.nav.push(NotificationsPage, { "resultData": resultData });
      // });

      // this.checkForUpdates();
      this.checkForIonicUpdates();
      this.updateTimer = setInterval(() => {
        this.isReadyForUpdateCheck = true;
      }, updateTimerInterval);
    });



    this.platform.resume.subscribe(
      () => {
        //this.checkForUpdates();
       // if (this.isReadyForUpdateCheck) {
          this.checkForIonicUpdates();
         // this.isReadyForUpdateCheck = false;
        //}
      }
    );

  }
  checkForIonicUpdates() {
    this.configurationService.checkForIonicDeploy();
  }
  checkForUpdates() {
    this.configurationService.getAppVersionNumber().then(
      (data) => {
        console.log(data);
        this.configurationService.checkForceUpdate(data);
      }
    );

  }

  notificationOpenedCallback(resultData) {
    console.log(resultData);
    //this.nav.push(NotificationsPage, { "resultData": resultData });
    this.baserestService.pushNotification(resultData);

  }
  notificationReceived(resultData) {
    console.log(resultData);
    this.storageService.validatesetNotification('allstorednotifications', resultData);
    console.log(resultData);
  }
}