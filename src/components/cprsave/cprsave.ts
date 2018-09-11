import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';

@Component({
    selector:'cprsave-viewer',
    templateUrl: 'cprsave.html'
})
export class CprsaveComponent {
 
    constructor( private navCtrl: NavController) { }

    ngOnInit() {
        // Tracking
  console.log("in save  compinent");
    }
    gototermsPage(){
        this.navCtrl.push(TermsconditionPage);
    }
    
}


