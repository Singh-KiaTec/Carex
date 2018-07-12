import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { ConfigurationService } from '../../providers/utils/configservices';


declare var cordova: any;

@Component({
    templateUrl: 'ionicpopover.html'
})
export class PopoverIonicdeploy {

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController,
        private platform: Platform
        // private configurationService: ConfigurationService
    ) {

    }

    reloadApp() {
       // this.pro.deploy.redirect();
     //  this.configurationService.Downlaod();
    }

    dismiss() {
    }
}