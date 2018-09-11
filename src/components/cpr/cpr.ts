import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { PasswordValidation } from '../../providers/validators/password-validator';
import { CPRsavePage } from '../../pages/cprsave/cprsave.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { CPRmismatchPage } from '../../pages/cprmismatch/cprmismatch.page';
import { StorageService } from '../../providers/storageservice/storageservice';
import {HomePage} from '../../pages/home/home.page';

@Component({
    selector: 'cpr-viewer',
    templateUrl: 'cpr.html'
})
export class CPRComponent {


    private cprForm: FormGroup;
    private cprdata;
    private heading;
    private cprlabel;
    private paragraphs;
    private continue;
    private cprnummnermodel;
    private iscprvalid;
    private cprinvaliderror = true;
    private userpiddata;
    private yes = false;
    private no = false;
    private cprsaved;
    private userdata;
    private gotonemid;
    private serviceerror=true;
    private serviceerrormessage='';
    private termsaccepted;
    private activestatus;

    // @ViewChild('yes') agree;
    // @ViewChild('no') dontagree;

    constructor(private navCtrl: NavController,private storageService: StorageService, private navParam: NavParams, private fb: FormBuilder,private storageservice:StorageService, private auth: AuthService, private baserestService: BaseRestService) {
        this.cprForm = this.fb.group({
            cprnummner: ['', Validators.required],
            yes: ['', Validators.required],
            no: ['']
        }, {
                validator: PasswordValidation.cprValidator // your validation method
            });
    }



    ngOnInit() {
        this.getcprData();
       this.userdata= this.auth.getUserInfo();
        this.userpiddata = this.navParam.get('userpiddata');
        this.storageService.get('terms').then(
            termsaccepted=>{
                this.termsaccepted = termsaccepted;

                if(termsaccepted){
                    this.navCtrl.setRoot(HomePage);
                }
            }
        );
    }
    getcprData() {
        this.baserestService.getCprData().then(
            cprdata => {
                this.cprdata = cprdata;
                this.setData();
            },
            error => { console.log("error"); }
        );

    }
    setData() {
        this.heading = this.cprdata.heading;
        this.paragraphs = this.cprdata.paragraphs;
        this.continue = this.cprdata.continue;
        this.gotonemid = this.cprdata.gotonemid;
    }

    cprValidate() {
        //if cpr is invalid push to mismatch page
        console.log(this.userpiddata);
        console.log(this.userpiddata.Pid);
        this.baserestService.validateCPR(this.userpiddata.Pid, this.cprnummnermodel).then(
            iscprvalid => {
                this.iscprvalid = iscprvalid;
                this.navigate();
            },
            error => { console.log("error"); }
        );
    }
    gotoNemid() {
        this.navCtrl.setRoot(NemidPage);
    }
    noagree(event) {
        event.preventDefault();
        console.log(this)
        this.no = true;
        this.yes = false;
    }
    yesagree(event) {
        event.preventDefault();
        console.log(this)
        // this.yes = true;
        // this.no = false;
        this.yes = this.yes==true? false: true;

    }
    navigate() {
        if (this.iscprvalid == 1) {
            this.saveCPR();
        }
        else {
            this.cprinvaliderror = false;
        }
    }
    saveCPR() {
   this.activestatus = this.cprForm.value.yes ==true? 'aktiv':'inaktiv';
   console.log(this.activestatus);
   console.log(this.yes);
            this.baserestService.saveCPR(this.userpiddata.Pid, this.cprnummnermodel,this.activestatus ,this.userdata.id).then(
                cprsaved => { cprsaved = this.cprsaved; this.savecprnavi(); },
                error => { console.log(error); this.serviceerror= false ;
                    this.serviceerrormessage = error.error? error.error: error;
                }
            )
    }
    savecprnavi(){
         this.storageservice.set('cprsave',this.activestatus);
         this.navCtrl.push(TermsconditionPage);

    }
   
}


