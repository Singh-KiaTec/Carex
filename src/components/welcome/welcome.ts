import { Component, ViewChild } from '@angular/core';
import { WelcomePage } from '../../pages/welcome/welcome.page';
import { welcome } from '../../models/data/welcome';
import { LoginPage } from '../../pages/login/login.page';
import { HomePage } from '../../pages/home/home.page';
import { HeaderComponent } from '../header/header';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { Nav, NavController, App, ViewController } from 'ionic-angular';
import { StorageService } from '../../providers/storageservice/storageservice';
import { errorHandler } from '@angular/platform-browser/src/browser';


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
    private loading;
    private welcomeread;

    constructor(private baserestService: BaseRestService, public navCtrl: NavController, private storageService: StorageService) { }

    ngOnInit() {
        // Tracking
        this.loading = true;
        this.getWelcomeData();
        this.storageService.get('welcome').then(
            welcome => {
            this.welcomeread = welcome;
                if (this.welcomeread) {
                    this.baserestService.navigateTo(LoginPage, null);
                }
                else{
                    this.storageService.set('welcome', false);
                }
            },
            error => console.log(error)
        )
    }
    getWelcomeData() {
        this.baserestService.getWelcomeData().then(
            welcomeData => { this.welcomedata = welcomeData; this.setData(); this.loading = false },
            error => { console.log("error"); this.loading = false }
        );

    }
    setData() {
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
        this.storageService.set('welcome', true);
        this.baserestService.navigateTo(LoginPage, null);

        //this.navCtrl.setRoot(LoginPage, {});
        // this.navCtrl.setRoot(HomePage, {});
    }
}


