import { Component, ViewChild ,ChangeDetectorRef} from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
// import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
// import { HeaderComponent } from '../header/header';
// import { termsconditions } from '../../models/data/termsandconditions';
import { HomePage } from '../../pages/home/home.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { StorageService } from '../../providers/storageservice/storageservice';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Termsconditions}from '../../models/termsconditions.model';
import { AuthService } from '../../providers/authenticationservice/auth.service';


@Component({
    selector: 'termsconditions-viewer',
    templateUrl: 'termsconditions.html'
})
export class TermsconditionsComponent {

    private heading;
    private paragraphs: any;
    private termsdata: any;
    private nb;
    private loading;

    private termsread;
    private ismenupage;
    private termsForm;
    private userdata;
    private termspagecontent;
    private checkboxcontent;
    private acceptermmodel = true;
    private saveerror;
    private saveerrormessage;
    private termssubmitdata;
    private isLoading = false;
    private termsmodel : Termsconditions;

    @ViewChild(Content) content: Content;


    constructor(private navCtrl: NavController,private ref: ChangeDetectorRef, private auth: AuthService, private navprams: NavParams, private baserestService: BaseRestService, private fb: FormBuilder, private storageService: StorageService) {
        this.termsForm = this.fb.group({
            accepterm: ['', Validators.required]
        });
        this.auth.user.subscribe(
            (userdata) => {
                {
                    this.userdata = userdata;
                }
            }
        );
 
    }

    ngOnInit() {
        // Tracking
        console.log("in Teerms");    
        this.isLoading = true;
        this.ismenupage = this.navprams.get('menupage');
           this.baserestService.getTermsandconditionsData(this.userdata.id).then(
            termsdata => { this.termsdata = termsdata; this.setData(termsdata); },
            error => { this.isLoading = false; }
        );

      
    
  

    }
    ngAfterViewInit() {
        if(this.ismenupage){
                this.termsForm.controls['accepterm'].disable();
        }

    }
    setData(termsdata) {
        console.log(this.termsdata);
        this.termsmodel = new Termsconditions(termsdata.result);
        this.isLoading = false;
        this.ref.detectChanges(); 
 }
    submitTerms() {
        this.isLoading = true;
        this.saveerror = false;
        let activestatus = this.termsForm.value.accepterm == true ? 'aktiv' : 'inaktiv';
        this.storageService.set('terms', true);
        this.baserestService.saveTermsandconditions(activestatus, this.userdata.id).then(
            termssubmitdata => { this.termssubmitdata = termssubmitdata; this.isLoading = false; this.navCtrl.setRoot(HomePage); },
            error => {
            this.saveerror = true;
                this.isLoading = false;
                this.saveerrormessage = error.error ? error.error : error.stausText;
            }
        );
        //    // 
        //     this.navCtrl.setRoot(NemidPage);
    }
}


