import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';


declare var cordova: any;

@Component({
    templateUrl: 'ionicpopover.html'
})
export class PopoverIonicdeploy {

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController,
        private platform: Platform
    ) {

    }

    reloadApp() {
       // this.pro.deploy.redirect();
    }

    dismiss() {
    }
}