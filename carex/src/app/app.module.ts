//DEFAULT
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



//ANGULAR
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu.page';
import { DetailsPage } from '../pages/details/details.page';
import { SettingsPage } from '../pages/settings/settings.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { NotificationsPage } from '../pages/notifications/notifications.page';



//COMPONENTS
import { MenuComponent } from '../components/menu/menu';



//MODELS
// import { data } from '../models/data/data';
// import { homepagedata } from '../models/data/homepagedata';


//PROVIDERS
import { BaseRestService } from '../providers/restservice/base.rest.service';



//IONIC
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsComponent } from '../components/settings/settings';
import { ProfileComponent } from '../components/profile/profile';
import { NotificationsComponent } from '../components/notifications/notifications';
import { DetailsComponent } from '../components/details/details';


const pagesDeclaration = [
  MenuPage,
  MyApp,
  HomePage,
  ListPage,
  DetailsPage,
  NotificationsPage,
  SettingsPage,
  ProfilePage
];

const componentDeclaration = [
  MenuComponent,
  DetailsComponent,
  SettingsComponent,
  ProfileComponent,
  NotificationsComponent

];

@NgModule({
  declarations: [
    ...pagesDeclaration,
    ...componentDeclaration
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseRestService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }