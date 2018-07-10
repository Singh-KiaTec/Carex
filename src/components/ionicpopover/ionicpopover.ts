import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { Pro } from '@ionic/pro';

declare var cordova: any;

@Component({
    templateUrl: 'ionicpopover.html'
})
export class PopoverIonicdeploy {

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController,
        private platform: Platform,
        private pro: Pro
    ) {

    }

    reloadApp() {
        this.pro.deploy.redirect();
    }

    dismiss() {
    }
}