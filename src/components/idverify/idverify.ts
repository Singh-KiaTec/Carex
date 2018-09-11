import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';

@Component({
    selector:'idverify-viewer',
    templateUrl: 'idverify.html'
})
export class IdverifyComponent {
 
    private heading;
    private paragraphs;
    private continue;
    private verifydata;
    constructor( private navCtrl: NavController, private baserestService: BaseRestService) { }

    
    ngOnInit() {
        this.getverifyData();
    }
    getverifyData() {
        this.baserestService.getIdverifyData().then(
            verifydata => {
                console.log(verifydata);
                this.verifydata = verifydata;
                this.setData();
            },
            error => { console.log("error"); }
        );

    }
    setData() {
        console.log(this.verifydata);
        this.heading = this.verifydata.heading;
        this.paragraphs = this.verifydata.paragraphs;
        this.continue = this.verifydata.continue;
    }
    gotoNemid() {
        console.log("go to login");
        // this.nav.pop();
        //this.nav.setRoot(LoginPage);
       // this.storageService.set('welcome', true);
       // this.baserestService.navigateTo(LoginPage, null);
       
       // this needs to uncommneted for actual flow
        this.navCtrl.setRoot(NemidPage);
       // this.navCtrl.push(TermsconditionPage);
    }

    
}


