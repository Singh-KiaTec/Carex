import { Component, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { ChangepasswordPage } from '../../pages/changepassword/changepassword';
import { Keyboard } from '@ionic-native/keyboard';
import { Vibration } from '@ionic-native/vibration';


@Component({
    selector: 'otp-viewer',
    templateUrl: 'otp.html'
})
export class OtpComponent {


    private loginForm: FormGroup;
    private success;
    private otpval1;
    private otpval2;
    private otpval3;
    private otpval4;
    @ViewChild("otp1") otp1_input;
    @ViewChild("otp2") otp2_input;
    @ViewChild("otp3") otp3_input;
    @ViewChild("otp4") otp4_input;
    private userdata;
    private error = false;


    constructor(private fb: FormBuilder, private keyboard: Keyboard, private navCtrl: NavController,
        private auth: AuthService, private baserestService: BaseRestService, private vibration: Vibration) {
        this.loginForm = this.fb.group({
            otp1: ['', Validators.required],
            otp2: ['', Validators.required],
            otp3: ['', Validators.required],
            otp4: ['', Validators.required]

        });
    }

    ngOnInit() {
        this.userdata = this.auth.getUserInfo();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.otp1_input.setFocus();
        }, 500);
    }

    gotochangePasword() {
        this.otpval1 = this.loginForm.value.otp1;
        this.otpval2 = this.loginForm.value.otp2;
        this.otpval3 = this.loginForm.value.otp3;
        this.otpval4 = this.loginForm.value.otp4;
        let otp = '' + this.otpval1 + this.otpval2 + this.otpval3 + this.otpval4;
        if (this.loginForm.valid) {
            this.baserestService.verifyOtp(this.userdata.id, otp).then(
                (success) => { this.success = success; this.setuserData(); },
                error => { this.error = true; this.vibration.vibrate(500); console.log(error) }
            )
        }

    }
    next(event) {
        event.preventDefault();
        console.log(event);
        if( event.key == 8 || event.keycode == 46 || event.key=="Backspace" ){
            this.removeFocus(event.currentTarget.id);
        }
        else{
 this.setFocus(event.currentTarget.id);
        }
       
    }
    removeFocus(itemname) {

        switch (itemname) {
            case "otp4": {
                this.otp3_input.setFocus();
                break;
            }
            case "otp3": {
                this.otp2_input.setFocus();
                break;
            }
            case "otp2": {
                this.otp1_input.setFocus();
                break;
            }
            case "otp1": {
                //this.gotochangePasword();
                break;
            }
            default: {
                break;
            }
        }

    }
    setFocus(itemname) {

        switch (itemname) {
            case "otp1": {
                this.otp2_input.setFocus();
                break;
            }
            case "otp2": {
                this.otp3_input.setFocus();
                break;
            }
            case "otp3": {
                this.otp4_input.setFocus();
                break;
            }
            case "otp4": {
                this.gotochangePasword();
                break;
            }
            default: {
                break;
            }
        }

    }
    setuserData() {
        console.log(this.success);
        this.navCtrl.push(ChangepasswordPage);
    }
}