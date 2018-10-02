import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Injectable()
export class GoogleAnalyticsService {

constructor(private ga: GoogleAnalytics){

}

    startTrackerWithId(id, interval){
        this.ga.startTrackerWithId(id, interval);

    }
    trackView(pagename){
        this.ga.trackView(pagename);
    }
    
}
