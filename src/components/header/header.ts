import { Component } from '@angular/core';
import { AuthService } from '../../providers/authenticationservice/auth.service';
//import { NavController } from 'ionic-angular';


@Component({
    selector: 'header-viewer',
    templateUrl: 'header.html'
})
export class HeaderComponent {

    private baseUrl = "http://trygsundhed.carex.dk/";
    private userdata;
    constructor(private auth: AuthService) { }

    ngOnInit() {
        // Tracking
        // this.baseUrl="http://udv-admin.carex.dk/config/assets/imgs/unitlogos/logos/"
        //this.baseUrl = this.auth.getEnvironment();
        console.log("in header compinent");
    }

}


