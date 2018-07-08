import { Injectable, Version } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { PopoverController, AlertController, ToastController, Platform } from 'ionic-angular';
import { StorageService } from '../storageservice/storageservice';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AppVersion } from '@ionic-native/app-version';
import { Market } from '@ionic-native/market';
const environment = "environment";
const updateInterval: number = 14400000;


@Injectable()
export class ConfigurationService {
    private versionNumber;


    constructor(private appVersion: AppVersion,
        private storageService: StorageService, private market: Market, private platform: Platform, private baserestService: BaseRestService, public alertCtrl: AlertController) {

    }
    getAppVersionNumber() {
        // let storedVersion:any = this.storageService.get("version");
        // // console.log("storedversion: " + storedVersion);
        // if (storedVersion) {
        //     return storedVersion;
        // } else {
        let storedVersion = this.appVersion.getVersionNumber();
        // this.appVersion.getVersionNumber().then((version) => {
        //     this.versionNumber = version;
        // })
        this.storageService.set('version', storedVersion);
        this.versionNumber = storedVersion;
        console.log(this.versionNumber);
        return this.versionNumber;
    }

    checkForceUpdate(version) {
        this.baserestService.getappVersion().then(
            (appInfo) => {
                if (appInfo) {
                    let appinfor: any = appInfo;
                    this.deployApp(appinfor);
                }
            },
            (error) => { }

        );

    }
    deployApp(appInfo) {
        this.storageService.set('snapshot', appInfo);
        console.log(appInfo);
        let update = this.compare(this.versionNumber, appInfo.appversion.version);
        console.log(update);
        if (update == -1) {
            this.showAlert();
        }
        //       if(this.versionNumber)

        //   }
    }
    showAlert() {
        const alert = this.alertCtrl.create({
            title: 'App Update!',
            subTitle: 'Please update your app to new version!',
            buttons: [
                {
                    text: 'Update',
                    handler: data => {
                        this.openStore();
                    }
                }]
        });
        alert.present();
    }
    openStore() {
        console.log("opening store");
        if (this.platform.is('android')) {
            this.market.open('com.carex.tryg.sundhed');
        } else {
            this.market.open('id1391413873');
        }
    }
    presentDeployConfirm(value) {
        let alert = this.alertCtrl.create({
            title: 'New update installed',
            message: 'Do you want to reload the app to install the update?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Reload',
                    handler: () => {
                       // this.deploy.load();
                    }
                }
            ]
        });
        alert.present();
    }
    // Return 1 if a > b
    // Return -1 if a < b
    // Return 0 if a == b
    compare(a, b) {
        a = a.__zone_symbol__value;
        if (a === b) {
            return 0;
        }

        var a_components = a.split(".");
        var b_components = b.split(".");

        var len = Math.min(a_components.length, b_components.length);

        // loop while the components are equal
        for (var i = 0; i < len; i++) {
            // A bigger than B
            if (parseInt(a_components[i]) > parseInt(b_components[i])) {
                return 1;
            }

            // B bigger than A
            if (parseInt(a_components[i]) < parseInt(b_components[i])) {
                return -1;
            }
        }

        // If one's a prefix of the other, the longer one is greater.
        if (a_components.length > b_components.length) {
            return 1;
        }

        if (a_components.length < b_components.length) {
            return -1;
        }

        // Otherwise they are the same.
        return 0;
    }

}