import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavParams, Navbar } from 'ionic-angular';
import { Button } from 'ionic-angular/components/button/button';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
//import { ViewChildren } from '@angular/core/src/metadata/di';
import {AuthService} from '../../providers/authenticationservice/auth.service';
import{SearchDetailsPage} from '../../pages/searchdetails/searchdetails.page';

@Component({
  selector: 'details-viewer',
  templateUrl: 'details.html'
})
export class DetailsComponent {
  private selectedMenuItem;
  private pagetitle;
  private selectedPage;
  private primaryColor;
  private currentTab;
  private secondaryColor;
  private tabsContent: any = [];
  private selectedContainer = 0;
  private searchData;
  private dropdownList;
  private searchedList;
  private textfieldList;
  private showsearchList = false;
  @ViewChild(Navbar) navbar: Navbar;
  @ViewChildren('navbuttons') navbuttons: Button;
  private tabs;
  private tabstoDisplay: any = [];
  private showsearchbutton = false;
  private tabsdata;
  private searchContent;
  private loading: boolean;
  private view;
  private searchlabel;
  private externallink;
  private starttestLabel;
  private user;

  constructor(private navParam: NavParams, private auth: AuthService, private navCtrl: NavController, private baserestService: BaseRestService) {

    this.selectedMenuItem = this.navParam.get('selectedItem');
    this.selectedPage = this.navParam.get('selectedPage');
    this.primaryColor = this.selectedPage.main_color;
    this.pagetitle = this.selectedMenuItem[1];
    this.tabs = this.selectedMenuItem[8];


  }

  ngOnInit() {
    var tabsdata = [];
    let currentitem: any;
    this.user = this.auth.getUserInfo();
    console.log(this.user);
    for (let item in this.tabs) {
      currentitem = this.tabs[item];
      this.tabstoDisplay.push(currentitem.tab_name);
      if (currentitem.text) {
        tabsdata.push(currentitem.text);
      }


    }
    this.tabsContent = tabsdata[0];
    this.tabsdata = tabsdata;

    this.navbar.setElementStyle("background-color", this.primaryColor);
    this.secondaryColor = this.hex2rgb();
    // console.log(this.secondaryColor);
    // console.log(this.tabsContent);
    for (let i in this.tabsContent) {
      console.log(this.tabsContent[i]);
    }

    if (this.tabstoDisplay[0] == "Smart søg") {
      this.showsearchbutton = true;
      this.baserestService.getsmartSearchData().then(
        searchData => {
          this.searchData = searchData; this.setData();
        },
        error => console.log(error)

      )
      // this.baserestService.getSearchPage().then(
      //   searchContent => { this.searchContent = searchContent; this.setData(); this.loading = false },
      //   error => { this.loading = false }
      // )

    }
    if (this.tabstoDisplay[0] == "APV / Sundhedsscreening") {
      // this.externallink = tru
      // "starttest":"Start test",
      // "starttestLink": "https://app-vital.life-partners.com/#/cx/",
      this.externallink = this.tabs[107].starttestLink+this.user.id[0];
      this.starttestLabel= this.tabs[107].starttest;
      console.log(this);

    }
  }

  setData() {
    this.dropdownList = this.searchData.dropdowns;
    this.searchedList = this.searchData.searchlist;
    this.textfieldList = this.searchData.text;
    this.view = this.searchData.view;
    this.searchlabel = this.searchData.search;
    console.log(this.searchData);
  }
  ngAfterViewInit() {
    if (this.navbuttons) {
      console.log("in after view intiti");
      this.switchonTab(0);
    }
    else {
      console.log("in esle  after view intiti");
      setTimeout(() => {
        this.switchonTab(0);
      }, 10);
    }
  }


  setSearchData() {
    console.log(this.searchData);
    this.dropdownList = this.searchData.dropdowns;
    this.searchedList = this.searchData.searchlist;
    this.textfieldList = this.searchData.text;
  }


  switchonTab(id) {
    this.selectedContainer = id;
    this.tabsContent = this.tabsdata[id];
    console.log(this.selectedContainer);
    let defaulttab: any = this.navbuttons;
    if (defaulttab) {
      defaulttab.map((item, index) => {
        if (index == id) {
          defaulttab._results[index].setElementStyle("background-color", this.primaryColor);
          return;
        }
        else {
          defaulttab._results[index].setElementStyle("background-color", this.secondaryColor);
        }
      });
    }

  }


  hex2rgb() {
    let opacity = 0.3;
    let hex = this.selectedPage.main_color;
    var h = hex.replace('#', '');
    h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));
    for (var i = 0; i < h.length; i++)
      h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
    if (typeof opacity != 'undefined') h.push(opacity);
    return 'rgba(' + h.join(',') + ')';
  }

  switchTab(e) {
    console.log(e.direction);
    console.log("in switch tabd");
    if (e.direction == 4) {
      this.selectedContainer = +this.selectedContainer - 1;
      if (this.selectedContainer < 0) {
        this.selectedContainer = this.tabstoDisplay.length - 1;
      }
      this.switchonTab(this.selectedContainer);
      console.log("backwaords");
    }


    if (e.direction == 2) {
      this.selectedContainer = +this.selectedContainer + 1;
      if (this.selectedContainer == this.tabstoDisplay.length) {
        this.selectedContainer = 0;
      }
      this.switchonTab(this.selectedContainer);
      console.log("in swipe forward");
    }
  }
  search() {
    this.showsearchList = true;
  }
  searchDetails(searchsltdItem) {
    console.log(searchsltdItem);
    this.navCtrl.push(SearchDetailsPage, { 'selectedItem': searchsltdItem })
  }
  partnersPage(event){
    console.log("partner");
    event.preventDefault();
  }
}
