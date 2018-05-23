import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TermsconditionPage } from '../../pages/termsconditions/termsconditions.page';
import { HeaderComponent } from '../header/header';
import { termsconditions } from '../../models/data/termsandconditions';
import { HomePage } from '../../pages/home/home.page';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { StorageService } from '../../providers/storageservice/storageservice';


@Component({
    selector: 'otherrelations-viewer',
    templateUrl: 'otherrelations.html'
})
export class OtherrelationsComponent {

    private heading;
    private paragraphs;
    private termsdata: any = termsconditions;
    private nb;
    private loading;
    private termsread;
    private ismenupage;
    private otherRelations;


    constructor(private navCtrl: NavController, private navprams: NavParams, private baserestService: BaseRestService, private storageService: StorageService) { }

    ngOnInit() {
        // Tracking
        console.log("in Teerms");
        this.ismenupage = this.navprams.get('menupage');
        this.baserestService.getOtherRelations().then(
            otherRelations => { this.otherRelations = otherRelations; this.setData(); this.loading = false },
            error => { this.loading = false }
        );        

    }

    setData() {
        this.heading = this.otherRelations.otherrelationer.heading;
        this.paragraphs = this.otherRelations.otherrelationer.paragraphs;
        
    }

}


