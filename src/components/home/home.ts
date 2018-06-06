import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController, Content, Navbar } from 'ionic-angular';
//import { data} from '../../models/data/data'; 
import { DetailsPage } from '../../pages/details/details.page';
import { tryg } from '../../models/data/tryg';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import {pageData} from '../../models/pagedata';
import { NotificationsPage } from '../../pages/notifications/notifications.page';




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
  private showButtons= true;
  private baseUrl;


  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navbar: Navbar;
  constructor(public navCtrl: NavController, public authService: AuthService, public navParams: NavParams, private baserestService: BaseRestService) {
    //    this.content.setElementStyle("background-color",this.pagedata.main_color);
    //    this.navbar.setElementStyle("background-color",this.pagedata.main_color);

  }
  ngOnInit(): void {
    this.navdata = this.navParams.get('pageData');
    this.currentpageIndex = this.navParams.get('itemIndex');
    

    this.baseUrl = this.authService.getEnvironment();
   
    if(!this.homedata){
        this.baserestService.getCustomerData().then(
      homedata => { this.homedata = homedata; this.setData(); this.loading = false },
      error => { this.loading = false }
    )
    }
  

    
  }
  //   ionViewWillEnter(): void{
  //     this.content.setElementStyle("background-color",this.pagedata.main_color);
  //     this.navbar.setElementStyle("background-color",this.pagedata.main_color);
  //   }

  //   ionViewDidLoad() {
  //     //this.content.enableJsScroll();
  //     this.content.setElementStyle("background-color",this.pagedata.main_color);
  //     this.navbar.setElementStyle("background-color",this.pagedata.main_color);
  // }
  ngAfterViewInit() {
  
   this.content.setElementStyle("background-color", "#D00000");
    // // this.navbar.setElementStyle("background-color",this.pagedata.main_color);
    // console.log("in home pge")

  }


  setData() {
    this.authService.setHomedata(this.homedata[1]);
    console.log("in home");
    //this.pagedata = this.navdata ? this.navdata : this.homedata[1];
    this.pagedata = this.homedata[1];
    //this.pagedata = this.homedata;
    this.pagedataModel = new pageData(this.pagedata);
    // console.log(this.pagedata);
    // console.log(this.homedata);
    // console.log(this.homedata[1]);
    this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
   // if (!this.navdata) {
      console.log(this.pagedata.show_buttons);
    //  this.pagedata = this.homedata[1];
      this.pagemenuButtons = this.pagedata.buttons;
      this.showButtons = this.pagedata.show_buttons;
    // } if(this.navdata){
    //   this.pagedata = this.navdata;
    //   this.pagemenuButtons = this.pagedata.buttons;
    //   this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
    // }
   
   
  }
  swipeEvent(e) {
    console.log("in swipe");

    //   if (e.direction == 4) {
    //     this.currentpageIndex = +this.currentpageIndex-1;
    //     if(this.currentpageIndex<=0){
    //       this.currentpageIndex = 7;
    //     }

    //     this.pagedata = this.homedata[this.currentpageIndex];
    //     this.pagemenuButtons =  this.pagedata.buttons;
    //     this.logourl = 'assets/imgs/unitlogos/'+this.pagedata.logo;
    //     this.content.setElementStyle("background-color",this.pagedata.main_color);
    //     this.navbar.setElementStyle("background-color",this.pagedata.main_color);
    //    // this.navCtrl.setRoot('',{'pageData':this.pagedata});
    //     console.log(this.pagemenuButtons);
    //   }


    //   if (e.direction ==2) {
    //       this.currentpageIndex = +this.currentpageIndex+1;
    //     if(this.currentpageIndex ==7){
    //       this.currentpageIndex = 1;
    //     }
    //     this.pagedata = this.homedata[this.currentpageIndex];
    //     this.pagemenuButtons =  this.pagedata.buttons;
    //     this.logourl = 'assets/imgs/unitlogos/'+this.pagedata.logo;
    //     console.log(this.pagemenuButtons);
    //     this.content.setElementStyle("background-color",this.pagedata.main_color);
    //     this.navbar.setElementStyle("background-color",this.pagedata.main_color);
    //     console.log("in swipe forward");
    // }
  }

  detailsPage(slctdItem, pagedata) {
    console.log(slctdItem);
    console.log(pagedata);
    this.navCtrl.push(DetailsPage, { 'selectedItem': slctdItem, 'selectedPage': pagedata });

    // this.selectedMenuItem = this.navParam.get('selectedItem');
    // this.selectedPage = this.navParam.get('selectedPage')
  }
  gotoNotification(){
    this.navCtrl.push(NotificationsPage,{}); 
  }

}
