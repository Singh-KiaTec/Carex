import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login.page';
import { HeaderComponent } from '../header/header';
import { HomePage } from '../../pages/home/home.page';
import { FormArray, FormBuilder, FormGroup, Validator, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NemidPage } from '../../pages/nemid/nemid.page';



@Component({
    selector: 'login-viewer',
    templateUrl: 'login.html'
})
export class LoginComponent {

    private loginForm: FormGroup;
    constructor(private fb: FormBuilder, private navCtrl: NavController) {
        this.loginForm = this.fb.group({
            userid: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
        // Tracking

        console.log("in login compinent");

    }
    login() {
        console.log(this.loginForm.value);
       // this.navCtrl.setRoot(HomePage);
        this.navCtrl.setRoot(NemidPage);
    }

}


