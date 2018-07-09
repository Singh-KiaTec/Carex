import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { Platform } from 'ionic-angular/platform/platform';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
    selector: 'searchdetails-viewer',
    templateUrl: 'searchdetails.html'
})
export class SearchDetailsComponent {

    private searchselectedItem;
    private heading;
    private image;
    private teaser;
    private detailsparagraphs;
    private pagetitle = "SearchResult";
    private bilagurl;
    private bilagName;
    private baseUrl;
    //    private  options : any = {
    //         location :  'no',
    //         hidden : 'no', //Or  'yes'
    //         clearcache : 'yes',
    //         clearsessioncache : 'yes',
    //         zoom : 'yes',//Android only ,shows browser zoom controls 
    //         hardwareback : 'yes',
    //         mediaPlaybackRequiresUserAction : 'no',
    //         shouldPauseOnSuspend : 'no', //Android only 
    //         closebuttoncaption : 'Close', //iOS only
    //         disallowoverscroll : 'no', //iOS only 
    //         toolbar : 'yes', //iOS only 
    //         enableViewportScale : 'no', //iOS only 
    //         allowInlineMediaPlayback : 'no',//iOS only 
    //         presentationstyle : 'pagesheet',//iOS only 
    //         fullscreen : 'yes',//Windows only    
    //     };
     constructor(private iab: InAppBrowser, private navParam: NavParams, private auth: AuthService, private platform: Platform) {
        this.searchselectedItem = this.navParam.get('selectedItem');

    }

    ngOnInit() {
        // Tracking
        // this.fileTransfer = this.transfer.create();
        console.log("in search  compinent");
        this.baseUrl = this.auth.getEnvironment();
        console.log(this.searchselectedItem);
        this.heading = this.searchselectedItem.heading;
        this.image = this.searchselectedItem.image;
        this.teaser = this.searchselectedItem.teaser;
        this.detailsparagraphs = this.searchselectedItem.details;
        this.bilagurl = this.baseUrl + 'config/assets/imgs/searchimages/' + this.searchselectedItem.bilag;
        this.bilagName = this.searchselectedItem.bilag;


    }

    downloadPdf(event) {
        event.preventDefault();
        // let path:any;
        // if (this.platform.is('ios')) {
        //     path = this.file.documentsDirectory;
        //   } else if (this.platform.is('android')) {
        //     path = this.file.dataDirectory;
        //   }
        // const transfer = this.transfer.create();
        // window.open("https://docs.google.com/viewer?url="+this.bilagurl, "_blank");
       this.iab.create("https://docs.google.com/viewer?url=" + this.bilagurl, "_system", "location=no,hardwareback=yes");
       

        // transfer.download(this.bilagurl,this.file.dataDirectory + this.bilagName).then((entry) => {
        //   console.log('download complete: ' + entry.toURL());
        //   let url = entry.toURL();
        //   this.document.viewDocument(url, 'application/pdf', {});
        // }, (error) => {
        //   // handle error
        // });
    }

}


