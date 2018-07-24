//DEFAULT
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
//  import { OneSignal } from '@ionic-native/onesignal';
import { CookieService } from 'ngx-cookie-service';
//  import { Cookie } from 'ng2-cookies';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Keyboard } from '@ionic-native/keyboard';
import { AppVersion } from '@ionic-native/app-version';
import { Market } from '@ionic-native/market';
import { Pro } from '@ionic/pro';
import { Injectable, Injector } from '@angular/core';
import { ProgressBarModule } from "angular-progress-bar";



//ANGULAR
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu.page';
import { DetailsPage } from '../pages/details/details.page';
import { SettingsPage } from '../pages/settings/settings.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { NotificationsPage } from '../pages/notifications/notifications.page';
import { LoginPage } from '../pages/login/login.page';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { NemidPage } from '../pages/nemid/nemid.page';
import { TermsconditionPage } from '../pages/termsconditions/termsconditions.page';
import { SearchDetailsPage } from '../pages/searchdetails/searchdetails.page';
import { OtherRelationsPage } from '../pages/otherrelations/otherrelations.page';
import { CustomanchorPage } from '../pages/customanchor/customanchor.page';



//COMPONENTS
import { MenuComponent } from '../components/menu/menu';



//MODELS
// import { data } from '../models/data/data';



//PROVIDERS
import { BaseRestService } from '../providers/restservice/base.rest.service';
import { StorageService } from '../providers/storageservice/storageservice';
import { WindowRef } from '../providers/windowservice/windowservice';
import { AuthService } from '../providers/authenticationservice/auth.service';
import { SafePipe } from '../providers/directory/safepipe';
import { ConfigurationService } from '../providers/utils/configservices';



//IONIC
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsComponent } from '../components/settings/settings';
import { ProfileComponent } from '../components/profile/profile';
import { NotificationsComponent } from '../components/notifications/notifications';
import { DetailsComponent } from '../components/details/details';
import { HomeComponent } from '../components/home/home';
import { NemidComponent } from '../components/nemid/nemid';
import { LoginComponent } from '../components/login/login';
import { WelcomeComponent } from '../components/welcome/welcome';
import { TermsconditionsComponent } from '../components/termsconditions/termsconditions';
import { HeaderComponent } from '../components/header/header';
import { SearchDetailsComponent } from '../components/searchdetails/searchdetails';
import { OtherrelationsComponent } from '../components/otherrelations/otherrelations';
import { CustomanchorComponent } from '../components/customanchor/customanchor';
import { PopoverIonicdeploy } from '../components/ionicpopover/ionicpopover';
import { DropDownPopOver } from '../components/dropdownpopover/dropdownpopover';


// Pro.init('2564d9e8', {
//   appVersion: '0.0.11',
//   channel: 'master'
// });

// @Injectable()
// export class MyErrorHandler implements ErrorHandler {
//   ionicErrorHandler: IonicErrorHandler;

//   constructor(injector: Injector) {
//     try {
//       this.ionicErrorHandler = injector.get(IonicErrorHandler);
//     } catch (e) {
//       // Unable to get the IonicErrorHandler provider, ensure
//       // IonicErrorHandler has been added to the providers list below
//     }
//   }

//   handleError(err: any): void {
//     Pro.monitoring.handleNewError(err);
//     // Remove this if you want to disable Ionic's auto exception handling
//     // in development mode.
//     this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
//   }
// }

const pagesDeclaration = [
  MenuPage,
  MyApp,
  HomePage,
  ListPage,
  DetailsPage,
  NotificationsPage,
  SettingsPage,
  ProfilePage,
  LoginPage,
  WelcomePage,
  NemidPage,
  SearchDetailsPage,
  TermsconditionPage,
  OtherRelationsPage,
  CustomanchorPage
];

const componentDeclaration = [
  MenuComponent,
  DetailsComponent,
  SettingsComponent,
  ProfileComponent,
  HomeComponent,
  NotificationsComponent,
  LoginComponent,
  WelcomeComponent,
  NemidComponent,
  TermsconditionsComponent,
  HeaderComponent,
  SearchDetailsComponent,
  SafePipe,
  OtherrelationsComponent,
  CustomanchorComponent,
  PopoverIonicdeploy,
  DropDownPopOver

];

@NgModule({
  declarations: [
    ...pagesDeclaration,
    ...componentDeclaration
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: 'Tilbage',
          scrollAssist: true,
          autoFocusAssist: true,
          scrollPadding: true
        },
        android: {
          scrollAssist: false,
          autoFocusAssist: false
        }
      }
    }),
    // IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'carexDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    NotificationsPage,
    SettingsPage,
    ProfilePage,
    DetailsPage,
    LoginPage,
    WelcomePage,
    NemidPage,
    SearchDetailsPage,
    TermsconditionPage,
    OtherRelationsPage,
    PopoverIonicdeploy,
    DropDownPopOver

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseRestService,
    StorageService,
    CookieService,
    ConfigurationService,
    HttpClient,
    Keyboard,
    Market,
    AppVersion,
    HttpClientModule,
    WindowRef,
    AuthService,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    //[{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule { }
