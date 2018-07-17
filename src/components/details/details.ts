import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavParams, Navbar, PopoverController, Platform } from 'ionic-angular';
import { Button, NavController } from 'ionic-angular';
import { BaseRestService } from '../../providers/restservice/base.rest.service';
//import { ViewChildren } from '@angular/core/src/metadata/di';
import { AuthService } from '../../providers/authenticationservice/auth.service';
import { SearchDetailsPage } from '../../pages/searchdetails/searchdetails.page';
//  import { CustomanchorComponent } from '../customanchor/customanchor';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { DropDownPopOver } from '../dropdownpopover/dropdownpopover';
import { Keyboard } from '@ionic-native/keyboard';


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
  @ViewChild('detailsContent') detailsContent;
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
  private allsearchresultList;
  private searchdropdownValue;
  private dropdownName;
  private resetlabel;
  private searchdropdownValueArray;
  private helbredskategorierModel;
  private emnerModel;
  private searchtext: any;
  private textfilteredList: any = [];
  private baseUrl;
  private totallist = '0';
  private options: any;
  private allcatalogs: any;
  private movecontentTop = false;
  private movecontentTopEnable = 0;
  private questionspage;
  private allQuestion;
  private myActiveSlide;
  private hideQuestion = false;
  private hidecontactus = false;

  constructor(private navParam: NavParams,
    private iab: InAppBrowser,
    private popoverCtrl: PopoverController,
    private platform: Platform,
    private keyboard: Keyboard, private auth: AuthService, private navCtrl: NavController, private baserestService: BaseRestService) {

    this.selectedMenuItem = this.navParam.get('selectedItem');
    this.selectedPage = this.navParam.get('selectedPage');
    this.user = this.navParam.get('userinfo');
    this.primaryColor = this.selectedPage.main_color;
    this.pagetitle = this.selectedMenuItem[1];
    this.tabs = this.selectedMenuItem[8];
    if (this.platform.is('iphone')) {
      this.keyboard.onKeyboardShow().subscribe(
        () => this.keyboardEnabled(),
        error => console.error("error")
      )
      this.keyboard.onKeyboardHide().subscribe(
        () => this.keyboardDisabled(),
        error => console.error("error")
      )
    }
  }
  ngOnInit() {
    this.options = {
      location: 'no',
      hidden: 'no', //Or  'yes'
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',//Android only ,shows browser zoom controls 
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no', //Android only 
      closebuttoncaption: 'Close', //iOS only
      disallowoverscroll: 'no', //iOS only 
      toolbar: 'yes', //iOS only 
      enableViewportScale: 'no', //iOS only 
      allowInlineMediaPlayback: 'no',//iOS only 
      presentationstyle: 'pagesheet',//iOS only 
      fullscreen: 'yes',//Windows only    
    };

    var tabsdata = [];
    let currentitem: any;
    this.baseUrl = this.auth.getEnvironment();
    // this.user = this.auth.getUserInfo();
    // console.log(this.user);
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
      this.externallink = this.tabs[107].starttestLink + this.user[3];
      this.starttestLabel = this.tabs[107].starttest;
      console.log(this);

    }
    if (this.pagetitle == "Stress og Trivsel") {
      this.baserestService.getQuestionary().then(
        questionspage => { this.questionspage = questionspage; this.setQuestionary(questionspage) },
        error => console.log(error)
      )
    }
  }
  setQuestionary(data) {
    this.myActiveSlide = 1;
    this.hideQuestion = false;
    console.log(data);
    this.allQuestion = this.questionspage.dropdowns;
  }

  keyboardDisabled() {
    if (this.platform.is('iphone')) {
      console.log("in keyboard disable");
      this.movecontentTop = false;
      this.movecontentTopEnable = 0;
      this.detailsContent._elementRef.nativeElement.className = "content content-ios details statusbar-padding";
    }
  }
  keyboardEnabled() {
    this.movecontentTopEnable = this.movecontentTopEnable + 1;
    if (this.platform.is('iphone') && (this.movecontentTopEnable == 1)) {
      console.log("in keyboard enable");
      this.movecontentTop = true;
      this.detailsContent._elementRef.nativeElement.className = "content content-ios details details--movecontentTop statusbar-padding";
    }
  }
  setData() {
    this.dropdownList = this.searchData.dropdowns;
    this.searchedList = this.searchData.searchlist;
    this.totallist = this.searchData.searchlist.length;
    this.allsearchresultList = this.searchData.searchlist;
    this.textfilteredList = this.searchData.searchlist;
    this.textfieldList = this.searchData.text;
    this.view = this.searchData.view;
    this.searchlabel = this.searchData.search;
    this.resetlabel = this.searchData.reset;
    this.allcatalogs = this.searchData.allcatalogs;
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
    this.totallist = this.searchedList.length ? this.searchedList.length : '0';
    this.textfieldList = this.searchData.text;
  }


  switchonTab(id) {
    this.selectedContainer = id;
    this.tabsContent = this.tabsdata[id];
    this.hidecontactus = true;
    this.hideQuestion = true;
    if (this.tabsContent == "Sæt venligst, ved hvert af de 5 udsagn, et kryds i det felt der kommer tættest på, hvordan du har følt dig i de sidste 2 uger. ") {
      this.hideQuestion = false;
    }
    if (this.tabsContent == "Beredskab") {
      this.hidecontactus = false;
    }

    console.log(this.selectedContainer);
    let defaulttab: any = this.navbuttons;
    if (defaulttab) {
      defaulttab.map((item, index) => {
        if (index == id) {
          defaulttab._results[index].setElementStyle("background-color", this.primaryColor);
          return;
        }
        else {
          //this.hideQuestion=true;
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
    let event: any = e;
    if (event.target.id != "slide1" && event.target.id != "slide2" && event.target.id != "slide3") {
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

  }
  search() {
    this.showsearchList = true;
    // this.searchedList = this.allsearchresultList;
  }
  reset(event) {
    event.preventDefault();
    this.searchedList = this.allsearchresultList;
    this.totallist = this.allsearchresultList.length ? this.allsearchresultList.length : '0';
    this.emnerModel = this.emnerModel ? null : this.emnerModel;
    this.helbredskategorierModel = null;
    this.showsearchList = false;
    this.searchtext = this.searchtext ? null : this.searchtext;

  }

  openwindow(event) {
    event.preventDefault();
    // window.open(this.url,"_system");
    this.iab.create(this.externallink, "_system", "location=yes,hardwareback=yes");
  }
  searchDetails(searchsltdItem) {
    console.log(searchsltdItem);
    this.navCtrl.push(SearchDetailsPage, { 'selectedItem': searchsltdItem })
  }
  partnersPage(event) {
    console.log("partner");
    event.preventDefault();
  }
  healthCategory(value, itemname) {
    if (value.length > 0) {
      this.searchdropdownValue = value;
      this.searchdropdownValueArray = value;
      this.dropdownName = itemname;

      if (itemname == "Emner") {
        this.emnerModel = this.searchdropdownValue;
      }
      if (itemname == "Helbredskategorier") {
        this.helbredskategorierModel = this.searchdropdownValue;
      }
      this.getSearchedList();

    }
  }

  getSearchedList() {
    console.log(this.searchedList);
    let filteredList: any = [];

    if ((!this.helbredskategorierModel && !this.emnerModel && this.searchtext.length < 3) || ((this.helbredskategorierModel || this.emnerModel) && (this.searchtext && this.searchtext.length < 3))) {
      if (this.searchedList.length == this.allsearchresultList.length || this.searchedList.length == 0) {
        // this.searchedList = filteredList[0];
      }
      else {
        this.searchedList = this.allsearchresultList;
        filteredList.push(this.searchedList.filter(this.filterSearch, this));
        this.searchedList = filteredList[0];
      }
    }
    else {
      this.searchedList = this.allsearchresultList;
      filteredList.push(this.searchedList.filter(this.filterSearch, this));
      if (this.searchedList.length == this.allsearchresultList.length || this.searchedList.length == 0) {
        this.searchedList = filteredList[0];
      }
      else {
        if (filteredList) {
          //this.searchedList = this.searchedList.concat(filteredList[0]);
          this.searchedList = filteredList[0];
        }
        else {
          // this.searchedList = this.allsearchresultList;
        }
      }
    }

    this.totallist = this.searchedList.length ? this.searchedList.length : '0';
    this.showsearchList = false;
  }
  filterSearch(item) {
    let filteredvalue;
    let tempval;
    let textsearchedval;
    if (this.emnerModel && !this.helbredskategorierModel && (!this.searchtext || this.searchtext.length < 3)) {
      filteredvalue = item.emner.filter(x => x == this.emnerModel)[0];
    }
    if (this.helbredskategorierModel && !this.emnerModel && (!this.searchtext || this.searchtext.length < 3)) {
      filteredvalue = item.helbredskategorier.filter(x => x == this.helbredskategorierModel)[0];
    }
    if ((this.helbredskategorierModel && this.emnerModel) && (!this.searchtext || this.searchtext.length < 3)) {
      filteredvalue = item.emner.filter(x => x == this.emnerModel)[0];
      tempval = item.helbredskategorier.filter(x => x == this.helbredskategorierModel)[0];
    }
    if (this.helbredskategorierModel && this.emnerModel && (this.searchtext && this.searchtext.length >= 3)) {
      filteredvalue = item.emner.filter(x => x == this.emnerModel)[0];
      tempval = item.helbredskategorier.filter(x => x == this.helbredskategorierModel)[0];
      textsearchedval = item.tags.filter(x => x.indexOf(this.searchtext) !== -1)[0];
    }


    if (this.helbredskategorierModel && !this.emnerModel && (this.searchtext && this.searchtext.length >= 3)) {
      tempval = item.helbredskategorier.filter(x => x == this.helbredskategorierModel)[0];
      textsearchedval = item.tags.filter(x => x.indexOf(this.searchtext) !== -1)[0];
    }
    if (!this.helbredskategorierModel && this.emnerModel && (this.searchtext && this.searchtext.length >= 3)) {
      filteredvalue = item.emner.filter(x => x == this.emnerModel)[0];
      textsearchedval = item.tags.filter(x => x.indexOf(this.searchtext) !== -1)[0];
    }
    if ((!this.helbredskategorierModel || !this.emnerModel) && filteredvalue) {
      return item;
    }
    if ((this.helbredskategorierModel && this.emnerModel) && (filteredvalue && tempval)) {
      return item;
    }
    if (this.helbredskategorierModel && this.emnerModel && (this.searchtext && this.searchtext.length >= 3) && (filteredvalue && tempval && textsearchedval)) {
      return item;
    }

    if (this.helbredskategorierModel && !this.emnerModel && (this.searchtext && this.searchtext.length >= 3) && (tempval && textsearchedval)) {
      return item;
    }
    if (!this.helbredskategorierModel && this.emnerModel && (this.searchtext && this.searchtext.length >= 3) && (filteredvalue && textsearchedval)) {
      return item;
    }

    else {
      return null;
    }
  }


  textFilter(event) {
    // event.preventDefault();
    this.movecontentTop = true;
    this.showsearchList = false;
    this.searchtext = event.value.toLowerCase();
    if (this.searchtext.length >= 3) {
      let filteredList: any = [];
      filteredList.push(this.textfilteredList.filter(this.filtertextSearch, this));
      this.searchedList = filteredList[0];
      this.totallist = this.searchedList.length ? this.searchedList.length : '0';
    }
    else {
      this.getSearchedList();

    }
    this.totallist = this.searchedList.length ? this.searchedList.length : '0';
  }

  filtertextSearch(item) {
    //  let filteredvalue;
    let tempval;
    let helbredskategoriervalue;
    let emnervalue;
    let textsearchedval;

    textsearchedval = item.tags.filter(x => x.indexOf(this.searchtext) != -1)[0];



    if (this.emnerModel && !this.helbredskategorierModel) {
      emnervalue = item.emner.filter(x => x == this.emnerModel)[0];
    }
    if (this.helbredskategorierModel && !this.emnerModel) {
      helbredskategoriervalue = item.helbredskategorier.filter(x => x == this.helbredskategorierModel)[0];
    }
    if (this.helbredskategorierModel && this.emnerModel) {
      emnervalue = item.emner.filter(x => x == this.emnerModel)[0];
      helbredskategoriervalue = item.helbredskategorier.filter(x => x == this.helbredskategorierModel)[0];
    }
    if ((!this.helbredskategorierModel || !this.emnerModel) && textsearchedval) {
      return item;
    }

    if (this.helbredskategorierModel && this.emnerModel && (textsearchedval && emnervalue && helbredskategoriervalue)) {
      return item;
    }
    else {
      return null;
    }
  }


  opendropDown(event) {
    event.preventDefault();
    let popover = this.popoverCtrl.create(DropDownPopOver, { enableBackdropDismiss: false }, { enableBackdropDismiss: false });
    popover.present();
  }

  switchQuestions(e) {
    console.log(e.direction);
    if (e.direction == 4) {

      console.log("backwaords");
    }
    if (e.direction == 2) {
      console.log("in swipe forward");
    }
  }
}
