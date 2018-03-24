//DEFAULT
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



//ANGULAR
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { ListPage } from '../pages/list/list';
import {MenuPage} from '../pages/menu/menu.page';


//COMPONENTS
import{MenuComponent} from '../components/menu/menu';



//MODELS
import { data } from '../models/data/data'; 
import { homepagedata } from '../models/data/homepagedata'; 


//PROVIDERS
import {BaseRestService} from '../providers/restservice/base.rest.service';



//IONIC
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const pagesDeclaration =[
MenuPage,
MyApp,
HomePage,
ListPage
];

const componentDeclaration = [
  MenuComponent

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
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseRestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
