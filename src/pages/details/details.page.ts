import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    templateUrl: 'details.page.html'
})
export class DetailsPage {
    constructor(
       private navCtrl: NavController
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in details");
    }
    
}
