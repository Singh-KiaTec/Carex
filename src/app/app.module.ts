//DEFAULT
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule ,NavController, ViewController} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
 import { OneSignal } from '@ionic-native/onesignal';
 import { CookieService } from 'ngx-cookie-service';
 import { HttpModule } from '@angular/http';
 import { HttpClientModule, HttpClient } from '@angular/common/http';
 import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';



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
import { TermsconditionPage} from '../pages/termsconditions/termsconditions.page';
import {SearchDetailsPage } from '../pages/searchdetails/searchdetails.page';




//COMPONENTS
import { MenuComponent } from '../components/menu/menu';



//MODELS
import { data } from '../models/data/data';



//PROVIDERS
import { BaseRestService } from '../providers/restservice/base.rest.service';
import { StorageService } from '../providers/storageservice/storageservice';
import { WindowRef } from '../providers/windowservice/windowservice';
import { AuthService } from '../providers/authenticationservice/auth.service';
import {SafePipe} from '../providers/directory/safepipe';



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
import {SearchDetailsComponent} from '../components/searchdetails/searchdetails';



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
  TermsconditionPage
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
  SafePipe

];

@NgModule({
  declarations: [
    ...pagesDeclaration,
    ...componentDeclaration
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    TermsconditionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseRestService,
    StorageService,
    CookieService,
    HttpClient,
    HttpModule,
    HttpClientModule,
    WindowRef,
    AuthService,
    OneSignal,
    { provide: ErrorHandler,   useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
