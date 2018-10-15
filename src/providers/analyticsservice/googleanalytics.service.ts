import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { BehaviorSubject } from 'rxjs';
import { Platform } from 'ionic-angular';



declare var cordova: any;

// declare class GoogleTagManager {
//     init(success: any, error: any, id: string, period: number);
//     trackPage(success: any, error: any, pageURL: string);
//     trackEvent(success: any, error: any, category: string, eventAction: string, eventLabel: string, eventValue: number);
//     pushEvent(success: any, fail: any, eventData: any);
// }

@Injectable()
export class GoogleAnalyticsService {
    private gtm: any;
    private isInitialized: boolean = false;

    public initialized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private ga: GoogleAnalytics, private platform: Platform) {
      this.gtm = cordova.require('com.jareddickson.cordova.tag-manager.TagManager');

    }

    startTrackerWithId(id, interval) {
        this.ga.startTrackerWithId(id, interval);
    }


    init(id: string) {
        this.gtm.init(null, null, id, 30);
        // return new Promise((resolve, reject) => {
        //         this.gtm = cordova.require('com.jareddickson.cordova.tag-manager.TagManager');
        //         let cbSuccess = (e) => {
        //             console.info('GTM init was successful', e);
        //             this.isInitialized = true;
        //             this.initialized$.next(true);
        //             resolve(e);
        //         }
        //         let cbError = (e) => {
        //             console.error('GTM init was not successful', e);
        //             reject(e);
        //         }

        //         this.gtm.init(cbSuccess, cbError, id, 30);
        // });
    }
    trackView(pagename) {
        this.ga.trackView(pagename);
    }
    // trackEvent(category, action, Label, value, session) {
    //     return this.ga.trackEvent(category, action, Label, value, session);
    // }
    trackEvent(category: string, eventAction: string, eventLabel: string, eventValue: number) {
        if (this.isInitialized === false) {
            console.info('Simulated >> GTM.trackEvent', category, eventAction, eventLabel, eventValue);
            return Promise.resolve();
        }

        console.info('GTM.trackEvent', category, eventAction, eventLabel, eventValue);

        return new Promise((resolve, reject) => {
            let cbSuccess = (e) => {
                console.info('GTM trackEvent was successful', e);
                resolve(e);
            }
            let cbError = (e) => {
                console.error('GTM trackEvent was not successful', e);
                reject(e);
            }

        this.gtm.trackEvent(cbSuccess, cbError,category, eventAction, eventLabel, eventValue);
        });
    }
    pushEvent(data: any = {}) {
        if (this.isInitialized === false) {
            console.info('Simulated >> GTM.pushEvent', data);
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            let dataObj = data;
            dataObj['event'] = event;

            let cbSuccess = (e) => {
                console.info('GTM pushEvent was successful', e);
                resolve(e);
            }
            let cbError = (e) => {
                console.error('GTM pushEvent was not successful', e);
                reject(e);
            }

            this.gtm.pushEvent(cbSuccess, cbError, data);
        });
    }
    trackPage(path: string) {
        if (this.isInitialized === false) {
            console.info('Simulated >> GTM.trackPage', path);
            return Promise.resolve();
        }

        console.info('GTM.trackPage', path);

        return new Promise((resolve, reject) => {
            let cbSuccess = (e) => {
                console.info('GTM trackPage was successful', e);
                resolve(e);
            }
            let cbError = (e) => {
                console.error('GTM trackPage was not successful', e);
                reject(e);
            }

            this.gtm.trackPage(cbSuccess, cbError, path);
        });
    }

}
