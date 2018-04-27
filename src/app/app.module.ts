//DEFAULT
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule ,NavController, ViewController} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';



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




//COMPONENTS
import { MenuComponent } from '../components/menu/menu';



//MODELS
import { data } from '../models/data/data';



//PROVIDERS
import { BaseRestService } from '../providers/restservice/base.rest.service';
import { StorageService } from '../providers/storageservice/storageservice';


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
  HeaderComponent


];

@NgModule({
  declarations: [
    ...pagesDeclaration,
    ...componentDeclaration
  ],
  imports: [
    BrowserModule,
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
    TermsconditionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseRestService,
    StorageService,
    OneSignal,
    { provide: ErrorHandler,   useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
