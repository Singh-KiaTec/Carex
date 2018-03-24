import { Component,ViewChild } from '@angular/core';
import {NavParams ,NavController,Content,Navbar } from 'ionic-angular';
import { data} from '../../models/data/data'; 



@Component({
  selector: 'HomePage',
  templateUrl: 'home.page.html'
})
export class HomePage {

public pagedata:any;
public homedata=data;
public navdata:any;
public logourl: string;
public currentpageIndex;
public pagemenuButtons;

@ViewChild(Content) content: Content;
@ViewChild(Navbar) navbar: Navbar;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
   this.navdata = this.navParams.get('pageData');
   this.currentpageIndex = this.navParams.get('itemIndex');

   this.pagedata = this.navdata ? this.navdata :this.homedata[1];
   this.currentpageIndex = this.currentpageIndex? this.currentpageIndex : 1;
   if(!this.navdata){
    console.log("in navdarta")
    this.pagedata = this.homedata[1];
    this.pagemenuButtons =  this.pagedata.buttons;
    console.log(this.pagedata);
  }else{
    this.pagedata = this.navdata;
    this.pagemenuButtons =  this.pagedata.buttons;
    this.currentpageIndex = this.currentpageIndex? this.currentpageIndex : 1;
    console.log("in pagedata")

    console.log(this.pagedata);
    this.logourl = 'assets/imgs/unitlogos/'+this.pagedata.logo;
   }
   console.log(this.pagemenuButtons);
   for(var i =0; i<this.pagemenuButtons.length;i++){

    console.log(this.pagemenuButtons[i]);
   }
  }
  ionViewWillEnter(): void{
    this.content.setElementStyle("background-color",this.pagedata.main_color);
    this.navbar.setElementStyle("background-color",this.pagedata.main_color);
  }

//   ionViewDidLoad() {
//     //this.content.enableJsScroll();
//     this.content.setElementStyle("background-color",this.pagedata.main_color);
//     this.navbar.setElementStyle("background-color",this.pagedata.main_color);
// }



swipeEvent(e) {


  if (e.direction == 4) {
    this.currentpageIndex = +this.currentpageIndex-1;
    if(this.currentpageIndex<=0){
      this.currentpageIndex = 7;
    }
  
    this.pagedata = this.homedata[this.currentpageIndex];
    this.pagemenuButtons =  this.pagedata.buttons;
    this.logourl = 'assets/imgs/unitlogos/'+this.pagedata.logo;
    this.content.setElementStyle("background-color",this.pagedata.main_color);
    this.navbar.setElementStyle("background-color",this.pagedata.main_color);
   // this.navCtrl.setRoot('',{'pageData':this.pagedata});
    console.log(this.pagemenuButtons);
  }


  if (e.direction ==2) {
      this.currentpageIndex = +this.currentpageIndex+1;
    if(this.currentpageIndex ==7){
      this.currentpageIndex = 1;
    }
    this.pagedata = this.homedata[this.currentpageIndex];
    this.pagemenuButtons =  this.pagedata.buttons;
    this.logourl = 'assets/imgs/unitlogos/'+this.pagedata.logo;
    console.log(this.pagemenuButtons);
    this.content.setElementStyle("background-color",this.pagedata.main_color);
    this.navbar.setElementStyle("background-color",this.pagedata.main_color);
    console.log("in swipe forward");
}
}
}
