import { Component } from '@angular/core';
import { NavParams, ViewController, Platform , AlertController} from 'ionic-angular';
import { ConfigurationService } from '../../providers/utils/configservices';
import { Pro } from '@ionic/pro';
import { ProgressBarModule } from "angular-progress-bar";



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
        private platform: Platform,
        private alertCtrl : AlertController,
        private confService: ConfigurationService
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
 async  Downlaod() {
        this.progressbar = true;
        this.downloadProgress = 0;
        this.extractProgress = 0;

        Pro.deploy.download((progress) => {
            console.log("in download .." + progress);
            this.downloadProgress = progress;
           // this.reloadApp();
        })
        // Pro.deploy.extract((progress) => {
        //     console.log("in extract .." + progress);
        //     this.extractProgress = progress;
        //     //this.displayIonicdeployDialog();

        // })
        Pro.deploy.extract().then(
            (progress) => {
                console.log("in extract newwwwwww.." + progress);
                this.extractProgress = progress;
                this.reloadApp();
            },
            (error)=>{
                  const alert = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Please try again',
                buttons: [
                    {
                        text: 'Reload App',
                        handler: data => {
                            alert.dismiss();
                            this.reloadApp();
                           console.log("error");
                          
                        }
                    }]
            });
            alert.present();
            }
        )
      //  await Pro.deploy.reloadApp();

    }
    // async performManualUpdate() {
    //     const update = await Pro.deploy.checkForUpdate()
    //     if (update.available){
    //       await Pro.deploy.downloadUpdate((progress) => {
    //         console.log(progress);
    //       })
    //       await Pro.deploy.extractUpdate((progress) => {
    //         console.log(progress);
    //       })
    //       await Pro.deploy.reloadApp();
    //     }
    //   }
    reloadApp() {

        this.progressbar = false;
        this.confService.reloadApp();
        // this.popover.dismiss();
        // this.reloadApp();
        // Pro.deploy.redirect();
        //  await Pro.deploy.reloadApp();
    }
}