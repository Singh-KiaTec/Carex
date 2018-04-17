import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Content,Navbar} from 'ionic-angular';
import { data } from '../../models/data/data';

@Component({
  templateUrl: 'home.page.html'
})
export class HomePage {


  public pagedata: any;
  public homedata=data;
  public navdata: any;
  public logourl: string;
  public currentpageIndex;
  public pagemenuButtons;
  @ViewChild(Content) content: Content;
@ViewChild(Navbar) navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.navdata = this.navParams.get('pageData');
    // this.currentpageIndex = this.navParams.get('itemIndex');

    // this.pagedata = this.navdata ? this.navdata : this.homedata[1];
    // this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
    // if (!this.navdata) {
    //   console.log("in navdarta")
    //   this.pagedata = this.homedata[1];
    //   this.pagemenuButtons = this.pagedata.buttons;
    // } else {
    //   this.pagedata = this.navdata;
    //   this.pagemenuButtons = this.pagedata.buttons;
    //   this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
    //   console.log("in pagedata")
    //   this.logourl = 'assets/imgs/unitlogos/' + this.pagedata.logo;
    // }
  }
  // ionViewDidEnter(): void {
  //    this.content.setElementStyle("background-color",this.pagedata.main_color);
  //    this.navbar.setElementStyle("background-color",this.pagedata.main_color);
  // }


}
