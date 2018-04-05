import { Component, ViewChild } from '@angular/core';
import { NavParams,Navbar } from 'ionic-angular';

@Component({
  selector: 'details-viewer',
  templateUrl: 'details.html'
})
export class DetailsComponent {
  private selectedMenuItem;
  private selectedPage;
  @ViewChild(Navbar) navbar: Navbar;
private tabs;
private tabstoDisplay:any =[];

  constructor(private navParam: NavParams) {

    this.selectedMenuItem = this.navParam.get('selectedItem');
    this.selectedPage = this.navParam.get('selectedPage')
    //this.pagetitle = this.selectedMenuItem[1];
    this.tabs = this.selectedMenuItem[8];
    for (let item in this.tabs) {
      let currentitem: any = this.tabs[item];
      this.tabstoDisplay.push(currentitem.tab_name);

  }
   }

  ngOnInit() {
    // Tracking
    console.log("in notify");
    console.log(this.selectedMenuItem);
    console.log(this.selectedPage);
    console.log(this.tabs);
    console.log(this.tabstoDisplay);
    this.navbar.setElementStyle("background-color",this.selectedPage.main_color);
  }

}
