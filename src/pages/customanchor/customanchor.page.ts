import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    templateUrl: 'customanchor.page.html'
})
export class CustomanchorPage {
    constructor(
       private navCtrl: NavController
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in anchor");
    }
    
}
