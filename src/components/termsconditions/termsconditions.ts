import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
// import { HeaderComponent } from '../header/header';
// import { termsconditions } from '../../models/data/termsandconditions';
 import { HomePage } from '../../pages/home/home.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { StorageService } from '../../providers/storageservice/storageservice';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../providers/authenticationservice/auth.service';


@Component({
    selector: 'termsconditions-viewer',
    templateUrl: 'termsconditions.html'
})
export class TermsconditionsComponent {

    private heading;
    private paragraphs:any;
    private termsdata: any;
    private nb;
    private loading;

    private termsread;
    private ismenupage;
    private termsForm;
    private userdata;
    private termspagecontent;
    private checkboxcontent;
    private acceptermmodel=true;
    private saveerror=true;
    private saveerrormessage='';


    constructor(private navCtrl: NavController, private auth: AuthService, private navprams: NavParams, private baserestService: BaseRestService, private fb: FormBuilder, private storageService: StorageService) { 
        this.termsForm = this.fb.group({
            accepterm: ['', Validators.required]
        });
       this.userdata =  this.auth.getUserInfo();
    }

    ngOnInit() {
        // Tracking
        console.log("in Teerms");
        this.ismenupage = this.navprams.get('menupage');
        this.baserestService.getTermsandconditionsData(this.userdata.id).then(
            termsconditions => { this.termsdata = termsconditions;  this.setData(); this.loading = false },
            error => { this.loading = false }
        );
     //   this.toogleView()

    }
    // toogleView(){
    //             this.storageService.get('cpr').then(
    //         termsread => {
    //             this.termsread = termsread;
    //             if (this.termsread) {
    //                 if(!this.ismenupage){
    //                 this.navCtrl.setRoot(HomePage);
    //                 }
    //             }
    //         },
    //         error => console.log(error)
    //     )
    // }
    setData() {
        console.log(this.termsdata);
        this.termspagecontent= this.termsdata.result; 
        this.heading = this.termsdata.result.samtykkeprocestrin;
        this.paragraphs = this.termsdata.result.beskrivelse;
        this.checkboxcontent = this.paragraphs[this.paragraphs.length-1];
        this.paragraphs.pop();
      //  this.nb = this.termsdata.terms.NB;
    }
    submitTerms() {
  
        let activestatus = this.termsForm.value.accepterm==true? 'aktiv':'inaktiv';
      this.storageService.set('terms', true);
        this.baserestService.saveTermsandconditions(activestatus).then(
            termsconditions => { this.termsdata = termsconditions; this.navCtrl.setRoot(HomePage); this.loading = false },
            error => { this.saveerror = false;
                this.saveerrormessage= error.error? error.error:error;
             }
        );
    //    // 
    //     this.navCtrl.setRoot(NemidPage);
    }
}


