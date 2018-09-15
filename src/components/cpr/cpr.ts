import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { PasswordValidation } from '../../providers/validators/password-validator';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { StorageService } from '../../providers/storageservice/storageservice';
import {HomePage} from '../../pages/home/home.page';
import {IdverifyPage} from '../../pages/idverify/idverify.page';
import {CPRPage} from '../../pages/cpr/cpr.page';
import { LoadingController } from 'ionic-angular';


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
    //private 
    private serviceerrormessage='';
    private termsaccepted;
    private activestatus;
    private userchecklistdata;
    private userpid='';

    // @ViewChild('yes') agree;
    // @ViewChild('no') dontagree;

    constructor(private navCtrl: NavController,
        public loadingCtrl: LoadingController,private storageService: StorageService, private navParam: NavParams, private fb: FormBuilder,private storageservice:StorageService, private auth: AuthService, private baserestService: BaseRestService) {
        this.cprForm = this.fb.group({
            cprnummner: ['', Validators.required],
            yes: ['', Validators.required],
            no: ['']
        }, {
                validator: PasswordValidation.cprValidator // your validation method
            });
            this.auth.userchecklistdata.subscribe(
                (userchecklistdata) => {
                  {
                  this.userchecklistdata = userchecklistdata;
                  }
                }
              );
              this.auth.user.subscribe(
                (userdata) => {
                  {
                    this.userdata = userdata;
                  }
                }
              );
    }



    ngOnInit() {
        this.getcprData();
       //this.userdata= this.auth.getUserInfo();
       this.userpiddata = this.navParam.get('userpiddata');
    //    if(!this.userpiddata){
    //      this.storageService.get('userpiddata').then(
    //         userpiddata=>{
    //             this.userpiddata = userpiddata;
    //         }
    //     );
    //     }
    console.log(this.userchecklistdata);
           console.log(this.userpiddata);

        // this.storageService.get('terms').then(
        //     termsaccepted=>{
        //         this.termsaccepted = termsaccepted;

        //         if(termsaccepted){
        //             this.navCtrl.setRoot(HomePage);
        //         }
        //     }
        // );
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
        // console.log(this.userpiddata);
        // let userpid;
        // if(this.userpiddata && this.userpiddata.nemid){
        //     userpid = this.userpiddata.nemid;
        // }
        // if(!userpid){
        //   userpid =  this.userchecklistdata.result.nemid; //  this.userpiddata.Pid? this.userpiddata.Pid : t
        // }
        this.userpid =  this.userchecklistdata.result.nemid; 
        this.baserestService.validateCPR(this.userpid, this.cprnummnermodel).then(
            iscprvalid => {
                this.iscprvalid = iscprvalid;
                this.navigate(iscprvalid);
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
    navigate(iscprvalid) {
        if (iscprvalid == 1) {
            this.saveCPR();
        }
        else {
            this.serviceerror = false ;
            this.cprinvaliderror = false;
        }
    }
    removeErrors(event) {
        event.preventDefault();
        this.serviceerror = true;
        this.cprinvaliderror = true ;
    }
    saveCPR() {
        this.serviceerror = true;
        this.cprinvaliderror = true ;
        const loader = this.loadingCtrl.create({
            content: "vent venligst...",
            duration: 3000
          });
          loader.present();
   this.activestatus = this.cprForm.value.yes ==true? 'aktiv':'inaktiv';
   // this.userpid = (this.userpiddata && this.userpiddata.nemid) ? this.userpiddata.nemid : this.userpiddata.Pid;
   console.log(this.activestatus);
   console.log(this.yes);
            this.baserestService.saveCPR(this.userpid, this.cprnummnermodel,this.activestatus ,this.userdata.id).then(
                cprsaved => { cprsaved = this.cprsaved; this.savecprnavi(); },
                error => { console.log(error); this.serviceerror = false;
                    this.serviceerrormessage = error.error? error.error: error;
                }
            )
    }
    savecprnavi(){
        this.serviceerror = true;
         this.storageservice.set('cprsave',this.activestatus);

   this.baserestService.checkactiveList(this.userdata.id).then(
        checklistdata=>{
            this.storageService.set('checklistdata', checklistdata);
            this.auth.setuserchecklistData(checklistdata); 
            this.decideflow(checklistdata);
           },
        error =>{console.log(error);  this.serviceerror = false;}
      );



        //  if(this.userpiddata && !this.userpiddata.GeneralAccept){
        //     this.navCtrl.push(TermsconditionPage);
        //   }

        //  if(this.userpiddata && this.userpiddata.GeneralAccept){
        //     this.navCtrl.push(HomePage,{'userinfo': this.userdata});
        //  }
        // else{
        //     this.navCtrl.push(TermsconditionPage);
        // } 

    }
    decideflow(checklistdata){
        this.serviceerror = true;
        if (!checklistdata.result) {
            this.navCtrl.setRoot(IdverifyPage);
        }
        if (checklistdata && checklistdata.result && checklistdata.result.cpr) {
            this.navCtrl.setRoot(HomePage);
        }
        if (checklistdata && checklistdata.result && checklistdata.result.GeneralAccept  && !checklistdata.result.cpr) {
            this.navCtrl.setRoot(HomePage);
        }
        if (checklistdata && checklistdata.result && !checklistdata.result.GeneralAccept) {
            this.navCtrl.setRoot(TermsconditionPage);
        }
        if (checklistdata && checklistdata.result && !checklistdata.result.GeneralAccept && !checklistdata.result.cpr && !checklistdata.result.nemid) {
            this.navCtrl.push(IdverifyPage);
        }
    }
   
}


