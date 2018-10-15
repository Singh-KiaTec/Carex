import { Component, ViewChild ,ChangeDetectorRef} from '@angular/core';
import { NavParams, NavController, Content, Navbar } from 'ionic-angular';
//import { data} from '../../models/data/data'; 
import { DetailsPage } from '../../pages/details/details.page';
import { tryg } from '../../models/data/tryg';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { pageData } from '../../models/pagedata';
import { NotificationsPage } from '../../pages/notifications/notifications.page';
import { StorageService } from '../../providers/storageservice/storageservice';
import {GoogleAnalyticsService} from '../../providers/analyticsservice/googleanalytics.service';



@Component({
  selector: 'home-viewer',
  templateUrl: 'home.html'
})
export class HomeComponent {

  public pagedata: any;
  //public homedata=tryg;
  private homedata;
  public navdata: any;
  public logourl: string;
  public currentpageIndex;
  public pagemenuButtons;
  private loading;
  private pagedataModel;
  private ImgUrl;
  private showButtons = true;
  // private baseUrl;
  private userinfo: any;
  private isLoading;


  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navbar: Navbar;
  constructor(public navCtrl: NavController,private gas: GoogleAnalyticsService, private ref: ChangeDetectorRef, public auth: AuthService, private storageService: StorageService, public navParams: NavParams, private baserestService: BaseRestService) {
    this.auth.user.subscribe(
      (userinfo) => {
        {
        this.userinfo = userinfo;
        }
      }
    );
   // this.gas.trackView('Home Page');
    this.gas.trackPage('Home Page');

  }
  ngOnInit(): void {
    console.log("in home");
    this.navdata = this.navParams.get('pageData');
    this.homedata = this.navParams.get('homedata');
    this.currentpageIndex = this.navParams.get('itemIndex');


    // this.baseUrl = this.auth.getEnvironment();

    if (!this.homedata) {
      this.isLoading = true;
      this.baserestService.getCustomerData().then(
        homedata => { this.homedata = homedata; this.setData();  },
        error => { this.isLoading = false }
      )
    }
    // console.log(this.userinfo);
    if(!this.userinfo){
          this.userinfo = this.navParams.get('userinfo');
    }

  }

  ngAfterViewInit() {

  }


  setData() {
    this.auth.setHomedata(this.homedata[1]);
    this.pagedata = this.homedata[1];
    this.pagedataModel = new pageData(this.pagedata);
    this.pagemenuButtons = this.pagedata.buttons;
    this.showButtons = this.pagedata.show_buttons;
    this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
    this.isLoading = false;
    this.ref.detectChanges(); 


  }
  swipeEvent(e) {
    console.log("in swipe");
  }

  detailsPage(slctdItem, pagedata) {
    if (!this.userinfo) {
      this.userinfo = this.auth.getUserInfo();
    }
    console.log(slctdItem);
    console.log(pagedata);
    this.navCtrl.push(DetailsPage, { 'selectedItem': slctdItem, 'selectedPage': pagedata, 'userinfo': this.userinfo });
  }
  gotoNotification() {
    this.navCtrl.push(NotificationsPage, {});
  }

}
