import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { ConfigurationService } from '../../providers/utils/configservices';
import { Pro } from '@ionic/pro';
import {ProgressBarModule} from "angular-progress-bar";


declare var cordova: any;

@Component({
    templateUrl: 'ionicpopover.html'
})
export class PopoverIonicdeploy {

    public downloadProgress: any;
    public extractProgress: any;
    private updateTimer;
    private popover: any;
    private progressbar = false;

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController,
        private platform: Platform
    ) {

    }

    updateApp() {
        // this.pro.deploy.redirect();
        this.Downlaod();
        // this.testDownload();
    }

    dismiss() {
    }
    // testDownload(){

    //   // this.progressbar = false;
    //     this.progressbar = true;
    //     this.downloadProgress = 0;
    //     this.extractProgress = 0;


    //  for(var i =0; i<100;i++){
    //    setTimeout(() => {
    //          this.downloadProgress = i;
    //       console.log(this.downloadProgress);
    // }, 1000);
    //  }

    //     this.progressbar = false;
    // }
    Downlaod() {
        this.progressbar = true;
        this.downloadProgress = 0;
        this.extractProgress = 0;

        Pro.deploy.download((progress) => {
            console.log(progress);
            this.downloadProgress = progress;
        })
        Pro.deploy.extract((progress) => {
            console.log(progress);
            this.extractProgress = progress;
            //this.displayIonicdeployDialog();

        })
        this.progressbar = false;
        this.popover.dismiss();
        this.reloadApp();
    }
    reloadApp() {
        Pro.deploy.redirect();
    }
}