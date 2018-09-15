import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'customanchor-viewer',
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
    private isdownload = false;
    private isdelete = false;
    private userdata;
    private isvitaltest = false;

    constructor(private iab: InAppBrowser, private auth: AuthService, private alrtCtrl: AlertController) {
        this.auth.user.subscribe(
            (userdata) => {
              {
              this.userdata = userdata;
              }
            }
          );
    }


    @Input() content: string;
    ngOnInit() {
        // Tracking
        // this.baseUrl="http://udv-admin.carex.dk/config/assets/imgs/unitlogos/logos/"
        //this.baseUrl = this.auth.getEnvironment();

        let hrefindex = this.content.indexOf('href=') + 5;
        let hrefstringindex = this.content.indexOf(">");

        let textindex = this.content.indexOf('>') + 1;
        let hreftextndex = this.content.indexOf('</');
if(!this.userdata){
        if (!this.userdata) {
            this.userdata = this.auth.getUserInfo();
          }
}
    

        this.url = this.content.substring(hrefindex, hrefstringindex);
        this.url = this.url.replace(/'/g, '');
        this.url = this.url.toString();
        this.urltext = this.content.substring(textindex, hreftextndex);
    }
    openWindow(event) {
        event.preventDefault();
        this.isdownload = this.content.indexOf('downloadreport') != -1 ? true : false;
        this.isdelete = this.content.indexOf('delete') != -1 ? true : false;
        this.isvitaltest = this.content.indexOf('vitaltest') != -1 ? true : false;

        let userid = this.userdata.id ? this.userdata.id : this.userdata[3];

        if (this.isdelete) {
            let deleteurl = this.url + 'userId=' + userid + '&delete=true';

            let alert = this.alrtCtrl.create({
                title: 'Slet rapport',
                message: 'Er du sikker på, at du vil slette?',
                buttons: [
                    {
                        text: 'Annuller',
                        role: 'Annuller',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ja',
                        handler: () => {
                            this.iab.create(deleteurl, "_system", "location=yes,hardwareback=yes");
                        }
                    }
                ]
            });
            alert.present();
        }
        if (this.isdownload) {
            let downlaodurl = this.url + 'userId=' + userid;
            this.iab.create(downlaodurl, "_system", "location=yes,hardwareback=yes");
        }
        if (this.isvitaltest) {
            let vitalurl = this.url + userid;
            this.iab.create(vitalurl, "_system", "location=yes,hardwareback=no");
        }
        if (!this.isdelete && !this.isdownload && !this.isvitaltest) {
            this.iab.create(this.url, "_system", "location=yes,hardwareback=yes");
        }

        //  browser.show();
    }
}


