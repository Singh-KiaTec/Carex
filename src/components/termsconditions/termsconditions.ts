import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { HeaderComponent } from '../header/header';
import { termsconditions } from '../../models/data/termsandconditions';
import { HomePage } from '../../pages/home/home.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import {StorageService} from '../../providers/storageservice/storageservice';


@Component({
    selector: 'termsconditions-viewer',
    templateUrl: 'termsconditions.html'
})
export class TermsconditionsComponent {

    private heading;
    private paragraphs;
    private termsdata: any = termsconditions;
    private nb;
    private loading;
    private termsread;
    constructor(private navCtrl: NavController, private baserestService: BaseRestService, private storageService: StorageService ) { }

    ngOnInit() {
        // Tracking
        console.log("in Teerms");
        this.baserestService.getTermsandconditionsData().then(
            termsconditions => { this.termsdata = termsconditions; this.setData(); this.loading = false },
            error => { this.loading = false }
        )
                this.storageService.get('terms').then(
            termsread => {
            this.termsread = termsread;
                if (this.termsread) {
                    this.navCtrl.setRoot(HomePage);
                }
                else{
                    this.storageService.set('terms', false);
                }
            },
            error => console.log(error)
        )

    }

    setData() {
        this.heading = this.termsdata.terms.heading;
        this.paragraphs = this.termsdata.terms.paragraphs;
        this.nb = this.termsdata.terms.NB;
    }
    gotohomePage() {
        this.navCtrl.setRoot(HomePage);
    }
}


