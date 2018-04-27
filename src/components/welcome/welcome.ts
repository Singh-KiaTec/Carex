import { Component, ViewChild } from '@angular/core';
import { WelcomePage } from '../../pages/welcome/welcome.page';
import { welcome } from '../../models/data/welcome';
import { LoginPage } from '../../pages/login/login.page';
import { HeaderComponent } from '../header/header';
import {BaseRestService} from '../../providers/restservice/base.rest.service';
import { Nav, NavController, App , ViewController} from 'ionic-angular';


@Component({
    selector: 'welcome-viewer',
    templateUrl: 'welcome.html'
})
export class WelcomeComponent {
    @ViewChild(Nav) nav: Nav;

  //  rootPage: any = WelcomePage;


    private welcomedata: any = welcome;
    private heading: any;
    private paragraphs;
    private condition;
    constructor(private baserestService: BaseRestService, public navCtrl: NavController) { }

    ngOnInit() {
        // Tracking
        console.log(this.welcomedata);
        this.heading = this.welcomedata.info.heading;
        this.paragraphs = this.welcomedata.info.paragraphs;
        this.condition = this.welcomedata.info.conditions;
        console.log(this.heading);
    }
    gotoLogin() {
        console.log("go to login");
       // this.nav.pop();
    //this.nav.setRoot(LoginPage);
       // this.baserestService.navigateTo(LoginPage, null);
   
        this.navCtrl.setRoot(LoginPage,{});
    }
}


