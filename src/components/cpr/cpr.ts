import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { PasswordValidation } from '../../providers/validators/password-validator';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { StorageService } from '../../providers/storageservice/storageservice';
import { HomePage } from '../../pages/home/home.page';
import { IdverifyPage } from '../../pages/idverify/idverify.page';
import { CPRPage } from '../../pages/cpr/cpr.page';
import { LoadingController } from 'ionic-angular';
import { Cpr } from '../../models/cpr.model';


@Component({
    selector: 'cpr-viewer',
    templateUrl: 'cpr.html'
})
export class CPRComponent {


    private cprForm: FormGroup;
    private cprcontentdata: any;
    private cprnummnermodel;
    private iscprvalid;
    private cprinvaliderror;
    private userpiddata;
    private yesmmodel = true;
    private no = false;
    private cprsaved;
    private userdata;
    private gotonemid;
    private serviceerror;
    //private 
    private serviceerrormessage = '';
    private termsaccepted;
    private activestatus;
    private userchecklistdata;
    private userpid = '';
    private loader: any;
    private isLoading;
    private cprdata: Cpr;




    // @ViewChild('yes') agree;
    // @ViewChild(Content) content: Content;

    constructor(private navCtrl: NavController, private storageService: StorageService, private navParam: NavParams, private fb: FormBuilder, private storageservice: StorageService, private auth: AuthService, private baserestService: BaseRestService) {
        this.cprForm = this.fb.group({
            cprnummner: ['', Validators.required],
            yes: ['', Validators.required]
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
        this.isLoading = true;
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

    ionViewDidEnter() {
        console.log("in enter");
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    getcprData() {
        this.baserestService.getCprData().then(
            cprdata => {
                this.cprcontentdata = cprdata;
                this.setData(cprdata);
            },
            error => { this.isLoading = false; console.log("error"); }
        );

    }
    setData(cprdata) {
        this.cprdata = new Cpr(cprdata);
        this.isLoading = false;
        this.cprForm.value.yes = true;
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

        //this.userpid =  this.userchecklistdata.result.nemid; 

        // if(this.keyboard.close()){
        //     this.keyboard.close();
        // }

        if (this.userchecklistdata && this.userchecklistdata.result && this.userchecklistdata.result.nemid) {
            this.userpid = this.userchecklistdata.result.nemid;
        }
        if (this.userpiddata && this.userpiddata.Pid) {
            this.userpid = this.userpiddata.Pid;
        }
        this.isLoading = true;
        this.baserestService.validateCPR(this.userpid, this.cprnummnermodel).then(
            iscprvalid => {
                this.iscprvalid = iscprvalid;
                console.log(iscprvalid);
                if (iscprvalid == null) {
                    // this.serviceerror = true;            
                    this.isLoading = false;
                    this.serviceerror = true;
                    this.cprinvaliderror = true;
                    

                }
                else {
                    this.serviceerror = false;
                    this.cprinvaliderror = false;
                    console.log(this.isLoading);
                    console.log(iscprvalid);
                    this.saveCPR();
                }
            },
            error => {
                console.log("error");
                this.isLoading = false;
                this.serviceerror = false;
                this.cprinvaliderror = false;
                this.serviceerrormessage = error.error ? error.error : error.statusText;
            }
        );
    }
    // updateCucumber(){
    //     console.log(this.cprForm.value.no)
    // }
    gotoNemid() {
        this.navCtrl.setRoot(NemidPage);
    }

    removeErrors() {
        this.serviceerror = false;
        this.cprinvaliderror = false;
        // this.serviceerrormessage =null;
    }
    saveCPR() {

        this.activestatus = this.cprForm.value.yes == true ? 'aktiv' : 'inaktiv';
        // this.userpid = (this.userpiddata && this.userpiddata.nemid) ? this.userpiddata.nemid : this.userpiddata.Pid;
        console.log(this.activestatus);
        console.log(this.yesmmodel);
        this.isLoading = true;
        this.baserestService.saveCPR(this.userpid, this.cprnummnermodel, this.activestatus, this.userdata.id).then(
            cprsaved => {
                cprsaved = this.cprsaved;  this.isLoading = false; this.savecprnavi();
            },
            error => {
                this.isLoading = false;
                this.serviceerror = false;
                this.cprinvaliderror = false;
                console.log(error);
                this.serviceerrormessage = error.error ? error.error : error;
            }
        )
    }
    savecprnavi() {
        this.storageservice.set('cprsave', this.activestatus);

        this.baserestService.checkactiveList(this.userdata.id).then(
            checklistdata => {
                this.storageService.set('checklistdata', checklistdata);
                this.auth.setuserchecklistData(checklistdata);
                this.decideflow(checklistdata);
            },
            error => {
                this.isLoading = false;
                console.log(error);
                this.serviceerror = true;
                this.serviceerrormessage = error.error ? error.error : error;
            }
        );

        //this.loader.dismiss();

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
    decideflow(checklistdata) {
       
        console.log(checklistdata);
        if (!checklistdata && !checklistdata.result) {
            this.navCtrl.setRoot(IdverifyPage);
        }
        if (checklistdata && checklistdata.result && checklistdata.result.cpr!=null) {
            this.navCtrl.setRoot(HomePage);
        }
        if (checklistdata && checklistdata.result && checklistdata.result.GeneralAccept && !checklistdata.result.cpr) {
            this.navCtrl.setRoot(HomePage);
        }
        if (checklistdata && checklistdata.result && !checklistdata.result.GeneralAccept) {
            this.navCtrl.setRoot(TermsconditionPage,{ 'menupage': false });
        }
        if ((checklistdata && checklistdata.result) && (!checklistdata.result.GeneralAccept && !checklistdata.result.cpr && !checklistdata.result.nemid)) {
            this.navCtrl.push(IdverifyPage);
        }
    }

}


