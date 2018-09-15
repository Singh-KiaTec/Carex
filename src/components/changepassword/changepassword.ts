import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StorageService } from '../../providers/storageservice/storageservice';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { OtpPage } from '../../pages/otp/otp';
import { LoginPage } from '../../pages/login/login.page';
import { PasswordValidation } from '../../providers/validators/password-validator';
import { HomePage } from '../../pages/home/home.page';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { CPRPage } from '../../pages/cpr/cpr.page';
import { ToastController } from 'ionic-angular';
import { IdverifyPage } from '../../pages/idverify/idverify.page';


@Component({
    selector: 'changepassword-viewer',
    templateUrl: 'changepassword.html'
})
export class changepasswordComponent {

    rootPage: any;
    private loginForm: FormGroup;
    private success;
    private password;
    private confirmPassword;
    private userinfo;
    private cp_content;
    private userchecklistdata;



    constructor(private fb: FormBuilder, private navCtrl: NavController,private toastCtrl: ToastController,
        private auth: AuthService, private baserestService: BaseRestService, private storageService: StorageService) {
        this.loginForm = this.fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {
                validator: PasswordValidation.MatchPassword // your validation method
            });

            this.auth.userchecklistdata.subscribe(
                (userchecklistdata) => {
                  {
                  this.userchecklistdata = userchecklistdata;
                  }
                }
              );
              this.auth.user.subscribe(
                (userinfo) => {
                  {
                  this.userinfo = userinfo;
                  }
                }
              );
    }

    ngOnInit() {
        // Tracking
        //this.environment = this.auth.getEnvironment();
        // this.getloginData();
        this.baserestService.getchangepasswordData().then(
            (cp_content) => { this.cp_content = cp_content; },
            (error) => { console.log(error) }
        )
    }
    setData() {
        console.log(this.cp_content);
    }
    gotologin() {
        this.password = this.loginForm.value.password;
        this.confirmPassword = this.loginForm.value.confirmPassword;
        let id = this.userinfo.id;

        this.baserestService.changePassword(id, this.password).then(
            (success) => { this.success = success; this.checkactivestatus(); },
            error => console.log(error)
        )


    }
    checkactivestatus() {

             this.decideflow(this.userchecklistdata);

    }
    // this.storageService.set("user", this.userdata);
    // this.auth.setUserinfo(this.userdata);
    // this.navCtrl.setRoot(HomePage);
    decideflow(checklistdata) {
        let toast = this.toastCtrl.create({
            message: this.cp_content.successmessage,
            duration: 3000,
            position: 'top'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
          toast.present();


        console.log(checklistdata);
        if (!checklistdata) {
            this.navCtrl.setRoot(IdverifyPage);
        }
        if (checklistdata && checklistdata.result && checklistdata.result.cpr) {
           // this.rootPage = HomePage;
            this.navCtrl.setRoot(HomePage);
        }
        if (checklistdata && checklistdata.result && checklistdata.result.nemid &&  !checklistdata.result.cpr) {
            this.navCtrl.setRoot(CPRPage);
        }
        // else {
        //     this.navCtrl.setRoot(CPRPage);
        //    // this.rootPage = CPRPage;
        // }
    }
    resetForm() {
        this.loginForm.reset();
    }
}