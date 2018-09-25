import { Component } from '@angular/core';
import { NavParams, ViewController, Platform, AlertController } from 'ionic-angular';
import { ConfigurationService } from '../../providers/utils/configservices';
import { ProgressBarModule } from "angular-progress-bar";
// import { Pro } from '@ionic/pro';


@Component({
    templateUrl: 'ionicpopover.html'
})
export class PopoverIonicdeploy {

    public downloadProgress: 0;
    public extractProgress: 0;
    private updateTimer;
    private popover: any;
    private progressbar = false;
    private applyingflag = false;
    private progressflag = false;

    constructor( ) {
// public params: NavParams,
        // public viewCtrl: ViewController,
        // private platform: Platform,
        // private alertCtrl: AlertController,
        // private confService: ConfigurationService
    }

    // async updateApp() {
    //     this.progressbar = true;
    //     this.progressflag = true;
    //     this.downloadProgress = 0;
    //     this.extractProgress = 0;
    //     await Pro.deploy.downloadUpdate((progress) => {
    //         this.downloadProgress =progress;
    //         console.log(progress);
    //     })
    //     await Pro.deploy.extractUpdate((progress) => {
    //       //  this.applyingflag = true;
    //        // this.progressflag = false;
    //       //  this.extractProgress =progress;
    //         this.downloadProgress =progress;
    //         console.log(progress);
    //     })
    //     await Pro.deploy.reloadApp();
    //  }   
             
    

    dismiss() {
    }


    reloadApp() {
        this.progressbar = false;
    }
}