import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';

@Component({
    selector:'nemid-viewer',
    templateUrl: 'nemid.html'
})
export class NemidComponent {
 
    constructor( private navCtrl: NavController) { }

    ngOnInit() {
        // Tracking
  console.log("in nmeid  compinent");
    }

    loginNemid(){
        this.navCtrl.setRoot(TermsconditionPage);
    }
}


