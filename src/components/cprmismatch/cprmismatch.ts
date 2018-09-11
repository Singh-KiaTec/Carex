import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';

@Component({
    selector:'cprmismatch-viewer',
    templateUrl: 'cprmismatch.html'
})
export class CprmismatchComponent {
 
    constructor( private navCtrl: NavController) { }

    ngOnInit() {
        // Tracking
  console.log("in cpr mismatch  compinent");
    }

    loginNemid(){
        this.navCtrl.setRoot(TermsconditionPage);
    }
}


