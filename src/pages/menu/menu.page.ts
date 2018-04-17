import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    templateUrl: 'menu.page.html'
})
export class MenuPage {
    constructor(
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in menu");
    }
    
}
