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


@Component({
    selector: 'changepassword-viewer',
    templateUrl: 'changepassword.html'
})
export class changepasswordComponent {


    private loginForm: FormGroup;
    private success;
    private password;
    private confirmPassword;
    private userdata;



    constructor(private fb: FormBuilder, private navCtrl: NavController,
        private auth: AuthService, private baserestService: BaseRestService, private storageService: StorageService) {
        this.loginForm = this.fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        },{
                validator: PasswordValidation.MatchPassword // your validation method
            });
    }

    ngOnInit() {
        // Tracking
        //this.environment = this.auth.getEnvironment();
        // this.getloginData();
        this.userdata = this.auth.getUserInfo();
    }
    gotologin() {
        this.password = this.loginForm.value.password;
        this.confirmPassword = this.loginForm.value.confirmPassword;
        let id = this.userdata.id;

        this.baserestService.changePassword(id, this.password).then(
            (success) => { this.success = success; this.setuserData(); },
            error => console.log(error)
        )
    }
    setuserData() {
        // this.storageService.set("user", this.userdata);
        // this.auth.setUserinfo(this.userdata);
        this.navCtrl.setRoot(HomePage);
    }
    resetForm(){
        this.loginForm.reset();
    }
}