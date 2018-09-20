import { Component ,OnDestroy, Renderer2, HostListener} from '@angular/core';
import { NavController } from 'ionic-angular';
import {  NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { CPRPage } from '../../pages/cpr/cpr.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { Keyboard } from '@ionic-native/keyboard';
import { StorageService } from '../../providers/storageservice/storageservice';

 window;

@Component({
    selector:'nemid-viewer',
    templateUrl: 'nemid.html'
})
export class NemidComponent {
 
    private usernemid;
    private nemiddata;
    private heading;
    private iframenemidUrl;

    constructor( private navCtrl: NavController,private  storage: StorageService, private baserestService: BaseRestService, private auth : AuthService) { }

    ngOnInit() {
        // Tracking

        this.baserestService.getNemidData().then(
            nemiddata => {
                console.log(nemiddata);
                this.nemiddata = nemiddata;
                this.setData();
            },
            error => { console.log("error"); }
        
    );
    }
    loginNemid(){
        this.navCtrl.setRoot(TermsconditionPage);
    }
  setData(){
 this.heading = this.nemiddata.heading;
 this.iframenemidUrl = this.iframenemidUrl;
  }

    @HostListener('window:message', ['$event'])
    onMessage(e) {
        console.log(e);
        if(e.data.AuthenticationInfo){
         this.usernemid = e.data;
         this.auth.setUsernemiddata(e.data.AuthenticationInfo);
         this.storage.set('userpiddata',e.data.AuthenticationInfo);
         this.navCtrl.setRoot(CPRPage, { 'userpiddata': e.data.AuthenticationInfo });
        }
    }

    
}
