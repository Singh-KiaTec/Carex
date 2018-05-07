import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
    selector:'searchdetails-viewer',
    templateUrl: 'searchdetails.html'
})
export class SearchDetailsComponent {
 
    private searchselectedItem;
    private heading;
    private image;
    private teaser;
    private detailsparagraphs;
    private pagetitle= "SearchResult";
    constructor( private navCtrl: NavController, private navParam: NavParams) {    this.searchselectedItem = this.navParam.get('selectedItem'); }

    ngOnInit() {
        // Tracking
  console.log("in search  compinent");
  console.log(this.searchselectedItem);
  this.heading = this.searchselectedItem.heading;
  this.image = this.searchselectedItem.image;
  this.teaser = this.searchselectedItem.teaser;
  this.detailsparagraphs =  this.searchselectedItem.details;
    }

}


