import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import {HeaderComponent} from '../header/header';
import {termsconditions} from '../../models/data/termsandconditions';
import {HomePage} from '../../pages/home/home.page';

@Component({
    selector:'termsconditions-viewer',
    templateUrl: 'termsconditions.html'
})
export class TermsconditionsComponent {
 
    private heading;
    private paragraphs;
    private termsdata:any = termsconditions;
    private nb;
    constructor(private navCtrl: NavController) { }

    ngOnInit() {
        // Tracking
  console.log("in Teerms");
  this.heading = this.termsdata.terms.heading;
  this.paragraphs = this.termsdata.terms.paragraphs;
  this.nb = this.termsdata.terms.NB;
    }
    gotohomePage(){
        this.navCtrl.setRoot(HomePage);
    }
}


