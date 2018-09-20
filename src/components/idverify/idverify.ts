import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NemidPage } from '../../pages/nemid/nemid.page';
import { HeaderComponent } from '../header/header';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';

@Component({
    selector: 'idverify-viewer',
    templateUrl: 'idverify.html'
})
export class IdverifyComponent {

    private heading;
    private paragraphs;
    private continue;
    private verifydata;
    private isLoading;
    constructor(private navCtrl: NavController, private baserestService: BaseRestService) { }


    ngOnInit() {
        this.isLoading = true;
        this.getverifyData();
    }
    getverifyData() {
        this.baserestService.getIdverifyData().then(
            verifydata => {
                console.log(verifydata);
                this.verifydata = verifydata;
                this.isLoading = false;
                this.setData();
            },
            error => {
            this.isLoading = false;
                console.log("error");
            }
        );

    }
    setData() {
        this.heading = this.verifydata.heading;
        this.paragraphs = this.verifydata.paragraphs;
        this.continue = this.verifydata.continue;
    }
    gotoNemid() {
        console.log("go to login");
        this.navCtrl.setRoot(NemidPage);
    }


}


