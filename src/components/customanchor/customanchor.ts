import { Component, Input } from '@angular/core';
// import { AuthService } from '../../providers/authenticationservice/auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { NavController } from 'ionic-angular';


@Component({
    selector:'customanchor-viewer',
    templateUrl: 'customanchor.html'
})
export class CustomanchorComponent {
    // private  options : InAppBrowserOptions = {
    //     location :  'no',
    //     hidden : 'no', //Or  'yes'
    //     clearcache : 'yes',
    //     clearsessioncache : 'yes',
    //     zoom : 'yes',//Android only ,shows browser zoom controls 
    //     hardwareback : 'yes',
    //     mediaPlaybackRequiresUserAction : 'no',
    //     shouldPauseOnSuspend : 'no', //Android only 
    //     closebuttoncaption : 'Close', //iOS only
    //     disallowoverscroll : 'no', //iOS only 
    //     toolbar : 'yes', //iOS only 
    //     enableViewportScale : 'no', //iOS only 
    //     allowInlineMediaPlayback : 'no',//iOS only 
    //     presentationstyle : 'pagesheet',//iOS only 
    //     fullscreen : 'yes',//Windows only    
    // };    
    private url;
    private urltext;
    constructor(private iab: InAppBrowser) { }


     @Input() content: string;
    ngOnInit() {
        // Tracking
       // this.baseUrl="http://udv-admin.carex.dk/config/assets/imgs/unitlogos/logos/"
       //this.baseUrl = this.auth.getEnvironment();
  console.log("in anchor");
 let hrefindex =  this.content.indexOf('=')+1;
 let hrefstringindex =  this.content.indexOf(">");

let textindex = this.content.indexOf('>')+1;
let hreftextndex =  this.content.indexOf('</');

 this.url = this.content.substring(hrefindex, hrefstringindex);
this.url = this.url.replace(/'/g, '');
this.url = this.url.toString();
 this.urltext = this.content.substring(textindex, hreftextndex);
    }
    openWindow(event){
      event.preventDefault();
        // window.open(this.url,"_system");
      this.iab.create(this.url, "_system","location=yes,hardwareback=yes");
      //  browser.show();
    }
}


