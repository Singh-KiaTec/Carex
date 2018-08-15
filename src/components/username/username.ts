import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StorageService } from '../../providers/storageservice/storageservice';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import {OtpPage} from '../../pages/otp/otp';


@Component({
    selector: 'username-viewer',
    templateUrl: 'username.html'
})
export class UsernameComponent {


    private loginForm: FormGroup;
    private success;
    private username;
    private userdata;
    private error=false;


    constructor(private fb: FormBuilder, private navCtrl: NavController,
        private auth: AuthService, private baserestService: BaseRestService, private storageService: StorageService) {
        this.loginForm = this.fb.group({
            userid: ['', Validators.required]
        });
    }

    ngOnInit() {
        // Tracking
        //this.environment = this.auth.getEnvironment();
        // this.getloginData();
    }
    gotootp() {
        this.username = this.loginForm.value.userid;
        this.error = false;
        this.baserestService.sendOtp(this.username).then(
            (userdata) => { this.userdata = userdata ; this.setuserData();},
            error => { console.log(error); this.error=true;}
        )
    }
    setuserData(){
        this.storageService.set("user", this.userdata);
        this.auth.setUserinfo(this.userdata);
        this.navCtrl.push(OtpPage);
    }
}