import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';


@Component({
    selector:'header-viewer',
    templateUrl: 'header.html'
})
export class HeaderComponent {
 
    constructor(
       // private navCtrl: NavController
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in header compinent");
    }
    gotoLogin(){
        console.log("go to login");

    }
}


