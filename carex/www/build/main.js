webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_data_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_details_details_page__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homedata = __WEBPACK_IMPORTED_MODULE_2__models_data_data__["a" /* data */];
        this.navdata = this.navParams.get('pageData');
        this.currentpageIndex = this.navParams.get('itemIndex');
        this.pagedata = this.navdata ? this.navdata : this.homedata[1];
        this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
        if (!this.navdata) {
            console.log("in navdarta");
            this.pagedata = this.homedata[1];
            this.pagemenuButtons = this.pagedata.buttons;
        }
        else {
            this.pagedata = this.navdata;
            this.pagemenuButtons = this.pagedata.buttons;
            this.currentpageIndex = this.currentpageIndex ? this.currentpageIndex : 1;
            console.log("in pagedata");
            this.logourl = 'assets/imgs/unitlogos/' + this.pagedata.logo;
        }
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.content.setElementStyle("background-color", this.pagedata.main_color);
        this.navbar.setElementStyle("background-color", this.pagedata.main_color);
    };
    //   ionViewDidLoad() {
    //     //this.content.enableJsScroll();
    //     this.content.setElementStyle("background-color",this.pagedata.main_color);
    //     this.navbar.setElementStyle("background-color",this.pagedata.main_color);
    // }
    HomePage.prototype.swipeEvent = function (e) {
        if (e.direction == 4) {
            this.currentpageIndex = +this.currentpageIndex - 1;
            if (this.currentpageIndex <= 0) {
                this.currentpageIndex = 7;
            }
            this.pagedata = this.homedata[this.currentpageIndex];
            this.pagemenuButtons = this.pagedata.buttons;
            this.logourl = 'assets/imgs/unitlogos/' + this.pagedata.logo;
            this.content.setElementStyle("background-color", this.pagedata.main_color);
            this.navbar.setElementStyle("background-color", this.pagedata.main_color);
            // this.navCtrl.setRoot('',{'pageData':this.pagedata});
            console.log(this.pagemenuButtons);
        }
        if (e.direction == 2) {
            this.currentpageIndex = +this.currentpageIndex + 1;
            if (this.currentpageIndex == 7) {
                this.currentpageIndex = 1;
            }
            this.pagedata = this.homedata[this.currentpageIndex];
            this.pagemenuButtons = this.pagedata.buttons;
            this.logourl = 'assets/imgs/unitlogos/' + this.pagedata.logo;
            console.log(this.pagemenuButtons);
            this.content.setElementStyle("background-color", this.pagedata.main_color);
            this.navbar.setElementStyle("background-color", this.pagedata.main_color);
            console.log("in swipe forward");
        }
    };
    HomePage.prototype.detailsPage = function (slctdItem, pagedata) {
        console.log(slctdItem);
        console.log(pagedata);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_details_details_page__["a" /* DetailsPage */], { 'selectedItem': slctdItem, 'selectedPage': pagedata });
        // this.selectedMenuItem = this.navParam.get('selectedItem');
        // this.selectedPage = this.navParam.get('selectedPage')
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], HomePage.prototype, "navbar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'HomePage',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/home/home.page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title margin-left>\n      <img [width]="180" [height]="40" src="assets/imgs/unitlogos/{{pagedata.logo}}" /> \n        <!-- {{pagedata.organisation}} -->\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="homepage">\n  <div (swipe)="swipeEvent($event)" >\n  <div>\n      <img [width]="500" [height]="180" src="assets/imgs/{{pagedata.bg_image}}" />\n  </div>\n  <!-- <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p> -->\n<!-- \n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <ion-grid>\n      <!-- <ion-row>\n        <ion-col col-12>This column will take 12 columns</ion-col>\n      </ion-row> -->\n   \n         \n      <ion-row>\n              <ng-template ngFor let-item [ngForOf]="pagemenuButtons" let-i="index" [ngForTrackBy]="trackByFn">\n\n                \n                  <ion-col class="item" col-6>\n                    <div (click)="detailsPage(item,pagedata)">\n                     <div class="fa {{item[4]}} fa-3x" text-center></div>\n                     <p>{{item[1]}}</p>\n                     </div>\n           </ion-col>\n                </ng-template>  \n\n              </ion-row>\n            \n\n    \n    </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/home/home.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsPage = /** @class */ (function () {
    function SettingsPage() {
    }
    SettingsPage.prototype.ngOnInit = function () {
        // Tracking
        console.log("in settings");
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/settings/settings.page.html"*/'<ion-content>\n        <settings-viewer></settings-viewer>\n    </ion-content>'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/settings/settings.page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.page.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
        // Tracking
        console.log("in profile");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/profile/profile.page.html"*/'<ion-content>\n        <profile-viewer></profile-viewer>\n    </ion-content>'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/profile/profile.page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.page.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsPage = /** @class */ (function () {
    function NotificationsPage() {
    }
    NotificationsPage.prototype.ngOnInit = function () {
        // Tracking
        console.log("in notifications");
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/notifications/notifications.page.html"*/'<ion-content>\n        <notifications-viewer></notifications-viewer>\n    </ion-content>'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/notifications/notifications.page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.page.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController } from 'ionic-angular';
var DetailsPage = /** @class */ (function () {
    function DetailsPage() {
    }
    DetailsPage.prototype.ngOnInit = function () {
        // Tracking
        console.log("in details");
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/details/details.page.html"*/'<!-- <ion-header>\n    <header-page></header-page>\n</ion-header> -->\n<ion-content>\n    <details-viewer></details-viewer>\n</ion-content>'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/details/details.page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.page.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu_page__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_details_details_page__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings_page__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_page__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications_page__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_menu__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_restservice_base_rest_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_settings_settings__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_notifications_notifications__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_details_details__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DEFAULT



//ANGULAR








//COMPONENTS

//MODELS
// import { data } from '../models/data/data';
// import { homepagedata } from '../models/data/homepagedata';
//PROVIDERS

//IONIC






var pagesDeclaration = [
    __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu_page__["a" /* MenuPage */],
    __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_details_details_page__["a" /* DetailsPage */],
    __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications_page__["a" /* NotificationsPage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings_page__["a" /* SettingsPage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_page__["a" /* ProfilePage */]
];
var componentDeclaration = [
    __WEBPACK_IMPORTED_MODULE_11__components_menu_menu__["a" /* MenuComponent */],
    __WEBPACK_IMPORTED_MODULE_18__components_details_details__["a" /* DetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components_settings_settings__["a" /* SettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_profile_profile__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_17__components_notifications_notifications__["a" /* NotificationsComponent */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: pagesDeclaration.concat(componentDeclaration),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu_page__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications_page__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings_page__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_page__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_details_details_page__["a" /* DetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__providers_restservice_base_rest_service__["a" /* BaseRestService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_models_data_data__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__["a" /* HomePage */];
        this.menuList = __WEBPACK_IMPORTED_MODULE_5__src_models_data_data__["a" /* data */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // OneSignal Code start:
            // Enable to debug issues:
            // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit("86c266d2-3554-4095-97c5-6efc0ac1e91a", "599014675139")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/app/app.html"*/'\n<menu-viewer></menu-viewer>\n'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuPage = /** @class */ (function () {
    function MenuPage() {
    }
    MenuPage.prototype.ngOnInit = function () {
        // Tracking
        console.log("in menu");
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/menu/menu.page.html"*/'<!-- <ion-header>\n    <header-page></header-page>\n</ion-header> -->\n<ion-content>\n    <menu-viewer></menu-viewer>\n</ion-content>'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/pages/menu/menu.page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.page.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_data_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings_page__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_page__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications_page__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuList = __WEBPACK_IMPORTED_MODULE_2__models_data_data__["a" /* data */];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */];
    }
    MenuComponent.prototype.ngOnInit = function () {
        console.log("in menu");
        //this.menuLis;
        var pagesarray = [];
        for (var i in this.menuList) {
            pagesarray.push({
                title: this.menuList[i].organisation,
                component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */],
                pageData: this.menuList[i],
                index: i
            });
        }
        this.pages = pagesarray;
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'List', component: ListPage }
        // ];
    };
    MenuComponent.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var item = page.pageData;
        var itemIndex = page.index;
        console.log(page);
        this.nav.setRoot(page.component, { 'pageData': item, 'itemIndex': itemIndex });
    };
    MenuComponent.prototype.openProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_page__["a" /* ProfilePage */], {});
    };
    MenuComponent.prototype.openNotifications = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications_page__["a" /* NotificationsPage */], {});
    };
    MenuComponent.prototype.openSettings = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_settings_settings_page__["a" /* SettingsPage */], {});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MenuComponent.prototype, "nav", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-viewer',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/components/menu/menu.html"*/'<div class="menu">\n<ion-menu [content]="content">\n    <ion-header class="menu__header">\n      <ion-toolbar class="menu">\n        <ion-title>\n            <div class="menu"></div>\n            Carex</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content >\n      <ion-list >\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        <button menuClose ion-item (click)="openProfile()">\n            Profile\n          </button>\n          <button menuClose ion-item  (click)="openNotifications()">\n            Notifications\n            </button>\n            <button menuClose ion-item  (click)="openSettings()">\n               Settings\n              </button>\n\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n</div>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/components/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseRestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_data_data__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseRestService = /** @class */ (function () {
    // URL to web api
    function BaseRestService() {
    }
    BaseRestService.prototype.getAllMenuList = function () {
        return __WEBPACK_IMPORTED_MODULE_1__models_data_data__["a" /* data */];
    };
    BaseRestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaseRestService);
    return BaseRestService;
}());

//# sourceMappingURL=base.rest.service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings_page__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController } from 'ionic-angular';

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings_page__["a" /* SettingsPage */];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Tracking
        console.log("in settings");
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'settings-viewer',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/components/settings/settings.html"*/'\n<ion-header class="settings">\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title text-center>\n              <!-- <img [width]="200" [height]="50" src="assets/imgs/unitlogos/{{pagedata.logo}}" /> -->\n              <!-- {{pagedata.organisation}} -->\n              Settings\n              <div>\n                <!-- <img  class="logo" [width]="" [height]="45" src="assets/imgs/unitlogos/CareX_hvid_gronlogo-66.png" /> -->\n            </div>\n            </ion-title>\n        </ion-navbar>\n      </ion-header>\n      <ion-content class="homepage">\n        <ion-grid>\n               \n            <ion-row>\n                 <p>  In Settings Page coming soon with amazinng things........ </p>\n      \n                    </ion-row>\n                  \n      \n          \n          </ion-grid>\n        </ion-content>\n  \n        <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n    '/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/components/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile_page__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile_page__["a" /* ProfilePage */];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // Tracking
        console.log("in profile");
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-viewer',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/components/profile/profile.html"*/'\n<ion-header class="profile">\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title text-center>\n              <!-- <img [width]="200" [height]="50" src="assets/imgs/unitlogos/{{pagedata.logo}}" /> -->\n              <!-- {{pagedata.organisation}} -->\n              Profile\n              <div>\n                <!-- <img  class="logo" [width]="" [height]="45" src="assets/imgs/unitlogos/CareX_hvid_gronlogo-66.png" /> -->\n            </div>\n            </ion-title>\n        </ion-navbar>\n      </ion-header>\n      <ion-content class="homepage"> \n        <ion-grid>\n               \n            <ion-row>\n                 <p>  In Profile  Page coming soon........ </p>\n      \n                    </ion-row>\n                  \n      \n          \n          </ion-grid>\n        </ion-content>\n  \n        <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n    '/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/components/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_notifications_notifications_page__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_notifications_notifications_page__["a" /* NotificationsPage */];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        // Tracking
        console.log("in notify");
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notifications-viewer',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/components/notifications/notifications.html"*/'\n<ion-header class="notifications">\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title text-center>\n              <!-- <img [width]="200" [height]="50" src="assets/imgs/unitlogos/{{pagedata.logo}}" /> -->\n              <!-- {{pagedata.organisation}} -->\n              Notifications\n              <div>\n                <!-- <img  class="logo" [width]="" [height]="45" src="assets/imgs/unitlogos/CareX_hvid_gronlogo-66.png" /> -->\n            </div>\n            </ion-title>\n        </ion-navbar>\n      </ion-header>\n      <ion-content class="homepage"> \n        <ion-grid>\n               \n            <ion-row>\n                 <p>  In Notificaitons Now save all your notifications........ </p>\n      \n                    </ion-row>\n                  \n      \n          \n          </ion-grid>\n        </ion-content>\n  \n        <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n    '/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/components/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(navParam) {
        this.navParam = navParam;
        this.tabstoDisplay = [];
        this.selectedMenuItem = this.navParam.get('selectedItem');
        this.selectedPage = this.navParam.get('selectedPage');
        //this.pagetitle = this.selectedMenuItem[1];
        this.tabs = this.selectedMenuItem[8];
        for (var item in this.tabs) {
            var currentitem = this.tabs[item];
            this.tabstoDisplay.push(currentitem.tab_name);
        }
    }
    DetailsComponent.prototype.ngOnInit = function () {
        // Tracking
        console.log("in notify");
        console.log(this.selectedMenuItem);
        console.log(this.selectedPage);
        console.log(this.tabs);
        console.log(this.tabstoDisplay);
        this.navbar.setElementStyle("background-color", this.selectedPage.main_color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], DetailsComponent.prototype, "navbar", void 0);
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'details-viewer',template:/*ion-inline-start:"/Users/kiatec/Documents/Carex_Test/carex/src/components/details/details.html"*/'\n<ion-header class="details">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>\n          <!-- <img [width]="200" [height]="50" src="assets/imgs/unitlogos/{{pagedata.logo}}" /> -->\n          <!-- {{pagedata.organisation}} -->\n           {{pagetitle}}\n   \n          <div>\n            <!-- <img  class="logo" [width]="" [height]="45" src="assets/imgs/unitlogos/CareX_hvid_gronlogo-66.png" /> -->\n        </div>\n        </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content class="detailspage"> \n      <ion-grid>\n          <!-- <ion-row>\n            <ion-col col-12>This column will take 12 columns</ion-col>\n          </ion-row> -->\n          <!-- {{pagedata.organisation}}  -->\n    \n          <ion-row *ngIf="tabstoDisplay">\n            <ng-template ngFor let-item [ngForOf]="tabstoDisplay" let-i="index" [ngForTrackBy]="trackByFn">\n    \n    \n              <ion-col padding text-center>\n                <!-- <div class="fa {{item[4]}} fa-3x" text-center></div> -->\n                <p id="{{i}}">{{item}}</p>\n              </ion-col>\n            </ng-template>\n    \n          </ion-row>\n          <div *ngIf="!tabs">\n\n            no data...\n          </div>\n        </ion-grid>\n    </ion-content>\n\n    <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n'/*ion-inline-end:"/Users/kiatec/Documents/Carex_Test/carex/src/components/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailsComponent);
    return DetailsComponent;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = {
    "1": {
        "organisation": "KIApro Herlev",
        "logo": "logo-kia-300x88.jpg",
        "bg_image": "46795474.jpg",
        "main_color": "#334c55",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa-line-chart fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa fa-line-chart fa-3x",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    },
    "2": {
        "organisation": "KIApro Kolding",
        "logo": "CareX_hvid_gronlogo-66.png",
        "bg_image": "kolding.jpg",
        "main_color": "#334c55",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa fa-line-chart fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa fa-line-chart fa-3x",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    },
    "3": {
        "organisation": "KIApro Aalborg",
        "logo": "Aalborg.jpg",
        "bg_image": "Aalborg.jpg",
        "main_color": "#676767",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa fa-line-chart  fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa fa-line-chart fa-3x",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    },
    "4": {
        "organisation": "Plantorama",
        "logo": "logo_Ap-pension_hvid.png",
        "bg_image": "main_ap_pension2.jpg",
        "main_color": "#e4670a",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa-line-chart fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa-line-chart",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    },
    "5": {
        "organisation": "Ørsted",
        "logo": "orsted_logo-73.png",
        "bg_image": "main_tryg.png",
        "main_color": "#3f9ed8",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa-line-chart fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa-line-chart",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    },
    "6": {
        "organisation": "Tryg Forsikring",
        "logo": "Tryg_Logo_Red_2D_RGB_13-1940-74.png",
        "bg_image": "main_tryg.png",
        "main_color": "#e41518",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa-line-chart fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa-line-chart",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    },
    "7": {
        "organisation": "Arbejdsmiljø København",
        "logo": "ArbejdsmiljøKøbenhavn.png",
        "bg_image": "46795474.jpg",
        "main_color": "#216274",
        "buttons": [
            [
                "1",
                "Pensionsordning",
                "16",
                "wlc_pensionsordning.php",
                "fa-line-chart fa-3x",
                "187",
                "187",
                "8",
                {
                    "103": {
                        "tab_id": "1",
                        "tab_name": "MIN PENSION",
                        "sub_id": "1",
                        "text": ""
                    },
                    "104": {
                        "tab_id": "2",
                        "tab_name": "MINE DÆKNINGER",
                        "sub_id": "1",
                        "text": ""
                    },
                    "105": {
                        "tab_id": "3",
                        "tab_name": "PENSIONSINFO",
                        "sub_id": "1",
                        "text": ""
                    }
                }
            ],
            [
                "2",
                "Syge- / Raskmelding",
                "16",
                "wlc_syg_og_raskmelding.php",
                "fa fa-bed fa-3x",
                "65",
                "65",
                "17",
                {
                    "106": {
                        "tab_id": "4",
                        "tab_name": "Information om Hjælp ved sygdom",
                        "sub_id": "2",
                        "text": ""
                    },
                    "412": {
                        "tab_id": "250",
                        "tab_name": "Hjælp ved korttidssygefravær ",
                        "sub_id": "2",
                        "text": ""
                    },
                    "413": {
                        "tab_id": "251",
                        "tab_name": "Hjælp ved langtidssygefravær",
                        "sub_id": "2",
                        "text": ""
                    }
                }
            ],
            [
                "3",
                "Sundhedsscreening",
                "16",
                "wlc_sundhedsscreening.php",
                "fa fa-heartbeat fa-3x",
                "65",
                "65",
                "13",
                null
            ],
            [
                "4",
                "Stress og trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "65",
                "65",
                "10",
                {
                    "107": {
                        "tab_id": "5",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "4",
                        "text": ""
                    }
                }
            ],
            [
                "5",
                "Ledersparring",
                "16",
                "wlc_ledersparring.php",
                "fa fa-comments-o fa-3x",
                "135",
                "135",
                "17",
                {
                    "424": {
                        "tab_id": "252",
                        "tab_name": "Information om Ledersparring ",
                        "sub_id": "5",
                        "text": ""
                    },
                    "425": {
                        "tab_id": "253",
                        "tab_name": "Brug Ledersparring",
                        "sub_id": "5",
                        "text": ""
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "7",
                "Sundhedsydelser",
                "16",
                "wlc_sundhedsydelser.php",
                "fa fa-medkit fa-3x",
                "65",
                "65",
                "15",
                {
                    "108": {
                        "tab_id": "6",
                        "tab_name": "VILKÅR",
                        "sub_id": "7",
                        "text": ""
                    }
                }
            ],
            [
                "8",
                "Sundhedsforsikring",
                "16",
                "wlc_sundheds_forsikring.php",
                "fa fa-stethoscope fa-3x",
                "65",
                "65",
                "12",
                {
                    "109": {
                        "tab_id": "7",
                        "tab_name": "KONTAKT SELSKAB",
                        "sub_id": "8",
                        "text": ""
                    },
                    "110": {
                        "tab_id": "8",
                        "tab_name": "ANMELD SKADE",
                        "sub_id": "8",
                        "text": ""
                    },
                    "111": {
                        "tab_id": "9",
                        "tab_name": "VILKÅR",
                        "sub_id": "8",
                        "text": ""
                    }
                }
            ],
            [
                "9",
                "Rådgivningslinjen",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "7",
                "7",
                "7",
                null
            ],
            [
                "10",
                "Arbejdsfastholdelse",
                "16",
                "wlc_raadgivningslinje.php",
                "fa fa-handshake-o fa-3x",
                "1",
                "1",
                "1",
                null
            ],
            [
                "12",
                "Ledelsesoverblik",
                "16",
                "wlc_ledelsesoverblik.php",
                "fa fa-table fa-3x",
                "135",
                "135",
                "14",
                null
            ],
            [
                "13",
                "Kunder",
                "0",
                "wlc_aktor_table.php",
                "fa-users",
                "1",
                "1",
                "8",
                null
            ],
            [
                "14",
                "BRUGERE",
                "0",
                "wlc_user.php",
                "fa-user",
                "1",
                "1",
                "5",
                null
            ],
            [
                "15",
                "Sygemeld medarbejder",
                "16",
                "wlc_syg_og_raskmelding_medarbejder.php",
                "fa fa-users fa-3x",
                "65",
                "65",
                "12",
                {
                    "26": {
                        "tab_id": "14",
                        "tab_name": "POLITIKKER",
                        "sub_id": "15",
                        "text": ""
                    }
                }
            ],
            [
                "16",
                "Sundhedsportal",
                "16",
                "wlc_default.php",
                "fa fa-television fa-3x",
                "190",
                "190",
                "9",
                {
                    "124": {
                        "tab_id": "31",
                        "tab_name": "Sundhedsportal",
                        "sub_id": "16",
                        "text": "<h3 style=\"text-align:center\">Gå direkte til sundhedsportal</h3>\r\n\r\n<p style=\"text-align:center\">Klik på dette <a href=\"http://tryg.falckmycare.dk/da-dk\">link</a></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%284%29.png\" style=\"height:93px; width:220px\" /></p>\r\n"
                    }
                }
            ],
            [
                "17",
                "Vejviser",
                "16",
                "wlc_default.php",
                "fa fa-compass md fa-3x",
                "1",
                "1",
                "3",
                {
                    "118": {
                        "tab_id": "25",
                        "tab_name": "Tryg vejviser",
                        "sub_id": "17",
                        "text": "<h3>Sådan bruger du Tryg Vejviser</h3>\n\n<p>Det er enkelt at bruge Tryg Vejviser. Du ringer blot, så er vores sygeplejersker klar til at hjælpe dig.</p>\n\n<p>Åbningstider 08.00 - 17.00<br />\n </p>\n\n<hr />\n<p style=\"text-align: center;\"><input name=\"Telefon\" type=\"button\" value=\"RING OP\" /></p>\n\n<p style=\"text-align: center;\">Tryg Vejviser - <a href=\"tel:70259449\">70259449</a></p>\n\n<p style=\"text-align: center;\"> </p>\n\n<p> </p>\n"
                    },
                    "119": {
                        "tab_id": "26",
                        "tab_name": "Fakta om vejviser",
                        "sub_id": "17",
                        "text": "<p><strong>Tryg Vejviser giver dig tryghed gennem støtte og vejledning fra vores team af erfarne sundhedsfaglige medarbejdere.</strong></p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Vi finder den bedste vej igennem sundhedsvæsnet</strong></p>\r\n\r\n<p>Det danske sundhedsvæsen er en stor og kompleks størrelse. Det kan være svært at finde ud af, hvordan du bedst og hurtigst muligt får den rette behandling. Med Tryg Vejviser tager vi dig i hånden og viser vejen til det næste skridt. Vi bliver ved din side og rådgiver dig hele vejen gennem både offentlige og private behandlingsforløb – uanset om sundhedsforsikringen dækker eller ej.</p>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Tryg Vejviser hjælper dig altid</strong></p>\r\n\r\n<p>Vi skaber tryghed ved at vise vej i mange forskellige retninger:</p>\r\n\r\n<ul>\r\n\t<li>Guider dig igennem sundhedsvæsenet</li>\r\n\t<li>Hjælper dig hurtigt gennem alle behandlingskrævende forløb</li>\r\n\t<li>Vores sygeplejersker gennemgår dine journaler</li>\r\n\t<li>Rådgiver dig om ventetider, genoptræning, medicintilskud og det frie sygehusvalg</li>\r\n\t<li>Hjælper med at udfylde dokumenter</li>\r\n\t<li>Finder og etablerer kontakt til en patientvejleder</li>\r\n\t<li>Er tovholder i det offentlige kræftpakkeforløb</li>\r\n</ul>\r\n\r\n<p><strong> </strong></p>\r\n\r\n<p><strong>Hvem er omfattet af Tryg Vejviser?</strong></p>\r\n\r\n<p>Hvis du har Sundhedsforsikring eller Sundhed Basis hos Tryg, er du omfattet af Tryg Vejviser.</p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><input name=\"telefon\" type=\"button\" value=\"RING OP\" /></p>\r\n"
                    }
                }
            ],
            [
                "18",
                "Stress Stop-Linjen",
                "16",
                "wlc_default.php",
                "fa fa-user-md fa-3x",
                "6",
                "6",
                "2",
                {
                    "120": {
                        "tab_id": "27",
                        "tab_name": "Kontakt ",
                        "sub_id": "18",
                        "text": "<h3>Sådan kontakter du StressStop-linjen.</h3>\r\n\r\n<p>Du ringer blot, så er vores rådgivere klar til at hjælpe dig.</p>\r\n\r\n<p><strong>Åbningstider: </strong>08.00 - 17.00<br />\r\n </p>\r\n\r\n<hr />\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/carex_mobil/test4/ckeditor/kcfinder/upload/images/Tryg_Logo_Red_2D_RGB_13-1940%285%29.png\" style=\"height:93px; width:220px\" /></p>\r\n\r\n<h3 style=\"text-align:center\"><strong>Ring:</strong> -<a href=\"tel:70252643\">70252643</a> </h3>\r\n"
                    }
                }
            ],
            [
                "19",
                "Sundhedsforsikring",
                "16",
                "wlc_default.php",
                "fa fa-stethoscope fa-3x",
                "191",
                "191",
                "3",
                {
                    "382": {
                        "tab_id": "245",
                        "tab_name": "Brug forsikring",
                        "sub_id": "19",
                        "text": "<h3><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo(1).png\" style=\"height:45px; width:120px\" /> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>DU HAR DANSK SUNDHEDSSIKRING, SOM FORSIKRINGSLEVERANDØR</strong></span></h3>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Ved anmeldelse af en skade/lidelse eller sundhedsfaglig rådgivning, kan du kontakte Dansk Sundhedssikring direkte. </strong></span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nFax: 8832 6468<br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk?subject=sundhedsteam%40ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-17.00 (alle årets dage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span></p>\r\n\r\n<p><span style=\"font-size:18px\">Bemærk at skader ikke kan anmeldes via e-mail.<br />\r\nDu har også mulighed for at anmelde en skade online (kun ved anmeldelse af nye skader) via<a href=\"http://my.ds-sundhed.dk/#/login\"> </a><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\">Mit DS-Sundhed</a>.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Akut psykologisk krisehjælp</strong><br />\r\nDøgnåben service ved akut psykologisk krisehjælp.<br />\r\nHvis der opstår et behov for akut psykolog krisehjælp uden for åbningstiden, er der mulighed for at ringe på <a href=\"tel:+4560111144\">+20 6011 1144.</a> </span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Spørgsmål til din forsikring?</strong><br />\r\nVed spørgsmål til forsikringen, herunder spørgsmål om tilmelding, opsigelse, police, priser, forsikringsaftaler, login, mv.</span></p>\r\n\r\n<p><span style=\"font-size:18px\"><strong>Kontaktinformation og åbningstider</strong><br />\r\nTelefon: <a href=\"tel:+4570206121\">+20 7020 6121</a><br />\r\nE-mail: <a href=\"mailto:sundhedsteam@ds-sundhed.dk\">sundhedsteam@ds-sundhed.dk</a><br />\r\nÅbningstid: 08.00-16.00 (på hverdage)<br />\r\nHjemmeside: <a href=\"http://www.ds-sundhed.dk\" target=\"_blank\">www.ds-sundhed.dk</a></span><br />\r\n </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    },
                    "383": {
                        "tab_id": "246",
                        "tab_name": "Dækninger",
                        "sub_id": "19",
                        "text": "<h3><strong><span style=\"font-size:18px\">DIN FORSIKRING DÆKKER EN LANG RÆKKE LIDELSER OG SKADER, EKSEMPELVIS:</span></strong></h3>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"3\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos fysioterapeut, kiropraktor og psykolog. Der er ikke på forhånd bestemt antalsbegrænsninger, du kan selv vælge behandler, og du skal normalt ikke have henvisning fra egen læge. </span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos zoneterapeut og akupunktør. Ved behandling i vort netværk er der ikke på forhånd bestemt antalsbegrænsninger, uden for netværk er der op til 10 behandlinger af hver type pr. kalenderår.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Behandling hos diætist ved medicinsk begrundelse for denne behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">SundhedsNavigator med sundhedsfaglig vejledning til alle behandlingskrævende helbredsproblemer - også dem som ikke kan løses via forsikringsdækningerne. Det omfatter hjælp til navigation og tovholderfunktion igennem sundhedssystemet.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Akut psykologisk krisehjælp.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Hurtig undersøgelse og behandling hos speciallæger og på hospitaler - offentlig eller privat - alt efter hvad du fejler og mulighederne. Behandlingsgaranti 10 arbejdsdage.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Rådgivning om misbrugsbehandling og behandling i privat og offentligt regi.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Second opinion ved livstruende sygdom eller særlig farefyldt behandling.</span></li>\r\n\t\t\t\t<li><span style=\"font-size:18px\">Kollektiv børnedækning for børn mellem 0 og 21 år.</span></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p><span style=\"font-size:18px\"><strong>Via </strong><strong><a href=\"https://my.ds-sundhed.dk/#/login\" target=\"_blank\"><strong>Mit DS-Sundhed</strong></a> kan du få et samlet overblik og du har altid mulighed for at kontakte Dansk Sundhedssikring med dine eventuelle spørgsmål</strong></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"
                    },
                    "384": {
                        "tab_id": "247",
                        "tab_name": "Betingelser",
                        "sub_id": "19",
                        "text": "<h3><span style=\"font-size:18px\"><strong>FORSIKRINGSBETINGELSER</strong></span><br />\r\n<span style=\"font-size:18px\">Her finder du alle vilkår og betingelser for din sundhedsforsikring.</span></h3>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Arbejdsrelateret dækning.pdf\" target=\"_blank\">Vilkår vedrørende arbejdsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervArbejde- Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">Vilkår for tilvalg af dækning ved kronisk lidelse. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg af Privathospitalsdækning.pdf\" target=\"_blank\">Vilkår for tilvalg af privathospitalsdækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/Vilkår-Tilvalg kollektiv børnedækning.pdf\" target=\"_blank\">Vilkår for tilvalg af kollektiv børnedækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">Vilkår for tilvalg af sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid- Fritidsrelateret dækning.pdf\" target=\"_blank\">VilkårErhvervFritid- Fritidsrelateret dækning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg Sundhedsordning.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg Sundhedsordning. Klik her</a>. </span></p>\r\n</div>\r\n\r\n<p> </p>\r\n\r\n<div id=\"example1\">\r\n<p><img alt=\"Image\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/dslogo%281%29.png\" style=\"height:45px; width:120px\" />    <br />\r\n<span style=\"font-size:18px\"><a href=\"/qa_app/include/ckeditor3/kcfinder/upload/files/VilkårErhvervFritid-Tilvalg ved Kroniske lidelser.pdf\" target=\"_blank\">VilkårErhvervFritid-Tilvalg ved Kroniske lidelser. Klik her</a>. </span></p>\r\n</div>\r\n"
                    }
                }
            ],
            [
                "20",
                "Krænkelse",
                "16",
                "wlc_default.php",
                "fa fa-hand-paper-o fa-3x ",
                "1",
                "1",
                "1",
                {
                    "358": {
                        "tab_id": "241",
                        "tab_name": "Krænkelse",
                        "sub_id": "20",
                        "text": "<p style=\"text-align: center;\">{INDRAPPORTERING AF KREANKELSE}</p>\r\n"
                    }
                }
            ],
            [
                "21",
                "Mine data",
                "16",
                "wlc_default.php",
                "fa fa-database fa-3x",
                "191",
                "191",
                "7",
                {
                    "133": {
                        "tab_id": "17",
                        "tab_name": "Mine data",
                        "sub_id": "21",
                        "text": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:300px\">\r\n\t<caption>\r\n\t<h3>Oversigt</h3>\r\n\t</caption>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"text-align:center\"> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t\t<td> </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p> </p>\r\n"
                    },
                    "134": {
                        "tab_id": "18",
                        "tab_name": "Datadeling",
                        "sub_id": "21",
                        "text": ""
                    },
                    "135": {
                        "tab_id": "19",
                        "tab_name": "Mere om",
                        "sub_id": "21",
                        "text": ""
                    }
                }
            ],
            [
                "22",
                "My profile",
                "16",
                "wlc_default.php",
                "fa-user-circle-o",
                "7",
                "7",
                "1000",
                {
                    "334": {
                        "tab_id": "237",
                        "tab_name": "Profiloplysninger",
                        "sub_id": "22",
                        "text": "<h3 style=\"text-align:center\">{MIN PROFIL}</h3>\r\n"
                    }
                }
            ],
            [
                "23",
                "Stress og trivsel",
                "16",
                "wlc_default.php",
                "fa fa-thermometer-three-quarters fa-3x",
                "149",
                "149",
                "2",
                {
                    "364": {
                        "tab_id": "242",
                        "tab_name": "Spørgeskema",
                        "sub_id": "23",
                        "text": "<h3 style=\"text-align: center;\">Spørgeskema</h3>\r\n\r\n<p style=\"text-align: center;\">{STRESS OG TRIVSEL}</p>\r\n"
                    },
                    "370": {
                        "tab_id": "243",
                        "tab_name": "Historik",
                        "sub_id": "23",
                        "text": ""
                    },
                    "371": {
                        "tab_id": "244",
                        "tab_name": "Beradskab",
                        "sub_id": "23",
                        "text": ""
                    }
                }
            ],
            [
                "24",
                "Pension",
                "16",
                "wlc_default.php",
                "fa-line-chart",
                "5",
                "5",
                "8",
                {
                    "400": {
                        "tab_id": "248",
                        "tab_name": "Mobil AP",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">Her kan du gå direkte til Mobil AP</span></strong></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://itunes.apple.com/dk/app/mobil-ap/id1121774582?l=da&mt=8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/app_store.png\" style=\"height:66px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://play.google.com/store/apps/details?id=com.appension.mobilap&hl=da\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/google_play2.png\" style=\"height:59px; width:200px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til Mobil AP her</span></p>\r\n"
                    },
                    "401": {
                        "tab_id": "249",
                        "tab_name": "PensionsInfo",
                        "sub_id": "24",
                        "text": "<p style=\"text-align:center\"><strong><span style=\"font-size:18px\">På PensionsInfo kan du se en samlet oversigt over dine pensioner</span></strong></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Gå til PensionsInfo <a href=\"http://pensionsinfo.dk\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:18px\">Se video om PensionsInfo <a href=\"https://www.pensionsinfo.dk/Borgerservice/velkommen.html#modalVideo\" target=\"_blank\">her</a></span></p>\r\n\r\n<p style=\"text-align:center\"><a href=\"https://www.youtube.com/watch?time_continue=2&v=pdKbXvcfBw8\" target=\"_blank\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/pensionsinfovideo.PNG\" style=\"height:163px; width:270px\" /></a></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "25",
                "By & trafik",
                "16",
                "wlc_default.php",
                "fa-automobile",
                "1",
                "1",
                "100",
                {
                    "442": {
                        "tab_id": "255",
                        "tab_name": "By & Trafik",
                        "sub_id": "25",
                        "text": "test"
                    }
                }
            ],
            [
                "26",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "4",
                "4",
                "100",
                {
                    "448": {
                        "tab_id": "256",
                        "tab_name": "Information ",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "449": {
                        "tab_id": "257",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "26",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "450": {
                        "tab_id": "258",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "26",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ],
            [
                "27",
                "LEDERSPARRING",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "4",
                "4",
                "100",
                {
                    "466": {
                        "tab_id": "259",
                        "tab_name": "Information ",
                        "sub_id": "27",
                        "text": "<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "467": {
                        "tab_id": "260",
                        "tab_name": "Aktiver",
                        "sub_id": "27",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "28",
                "Sundhedsscreening",
                "16",
                "wlc_default.php",
                "fa fa-heartbeat fa-3x",
                "186",
                "186",
                "4",
                {
                    "481": {
                        "tab_id": "264",
                        "tab_name": "Spørgeskema",
                        "sub_id": "28",
                        "text": ""
                    },
                    "482": {
                        "tab_id": "265",
                        "tab_name": "Beredskab",
                        "sub_id": "28",
                        "text": ""
                    }
                }
            ],
            [
                "29",
                "Betingelser",
                "16",
                "wlc_default.php",
                "fa-thumbs-o-up",
                "7",
                "7",
                "1000",
                {
                    "483": {
                        "tab_id": "266",
                        "tab_name": "Betingelser og vilkår",
                        "sub_id": "29",
                        "text": "<p>Velkommen til CareX Workplace. CareX Workplace er udarbejdet af KIAtec og KIApro Worklife Healthcare. Du bør læse brugerbetingelser igennem, før du starter med af bruge services i CareX Workplace.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Din brug af services forudsætter, at du accepterer en række regler og betingelser, som vi redegør for herunder. Hvis du skulle finde noget i disse betingelser, som du ikke kan acceptere, skal du lukke applikationen.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Ved accept af brugerbetingelser og retningslinjer for behandling af personlige oplysninger erklærer du, at CareX i overensstemmelse med gældende lovgivning må behandle og opbevare dels en række personlige informationer, som indtastes i forbindelse med brugen af de services der ligger i applikationen. ved tilmelding, dels de sundhedsdata, som indberettes i forbindelse med sundhedstjekket samt evt. andre data, som du måtte afgive i CareX. Du kan læse vore retningslinjer og samtykkeerklæringen herunder.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Samtykkeerklæringen og fortrolighed</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>CareX ønsker at beskytte dit privatliv mest muligt og har derfor fastsat nogle retningslinjer for behandling af dine personlige informationer, som du skal acceptere, inden du tager applikationen i brug.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Når du indmelder dig, sker der en registrering af de personlige oplysninger, som du angiver, i en lukket database hos CareX. Disse oplysninger gemmes fra det øjeblik, du melder dig ind. Vi forbeholder os ret til at kontakte dig (sms, mail, telefon) i forbindelse med din aktivitet.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>KIAtec er en evidensbaseret virksomhed og opbevarer derfor dine oplysninger og dine data helt fortroligt i overensstemmelse med gældende lovgivning. CareX giver din kommune adgang til dine personlige oplysninger, for at de kan give dig den rådgivning, som du behøver. Oplysningerne videregives IKKE til nogen anden udenforstående tredjepart uden, at du udtrykkeligt har givet tilladelse til det. Oplysningerne opbevares i ti år.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>De data der indsamles i forbindelse med en beredskabsservice lagres i en elektronisk journal ved den ansvarlige serviceudbyder, som er underlagt tavshedspligt. Disse data vil ikke være tilgængelige for hverken din arbejdsplads, forsikrings-/og pensionsselskab eller 3 part, med mindre du udtrykkeligt giver samtykke til deling af specificerede data. Dine data kan i anonymiseret og på overordnet opsamlet niveau indgå i undersøgelser med henblik på statistik, forskning eller tendensvurderinger.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Dine oplysninger lagres i et sikret datamiljø beliggende i Danmark. Selvom vi beskytter dine data, kan vi ikke garantere 100% imod krænkelser, herunder eventuelle hacker- eller virusangreb. Vi kan heller ikke garantere for følgerne af eventuelt brud på sikkerheden, og vi kan på ingen måde stilles til ansvar herfor.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p><strong>Specielle vilkår for brugere med adgang til appen</strong></p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Generelle oplysninger og informationer på CareX dette site må ikke bruges i stedet for egentlig professionel rådgivning eller behandling af autoriseret læge eller anden relevant fagperson. Links til informationer og øvrigt indhold i sundhedsscreeningen er af generel karakter, som ikke kan erstatte fagpersoners individuelle råd og behandling. Det generelle materiale må således heller ikke opfattes som hverken diagnoser eller basis for diagnoser. Har du sundhedsmæssige spørgsmål, skal dette foregå i en direkte to-vejs-dialog med læge eller anden professionel behandler.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Hverken CareX eller serviceudbydere under CareX kan direkte eller indirekte gøres ansvarlige for eventuelle konsekvenser af anvendelsen af de services der stilles til rådighed, generelle oplysninger og informationer.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Alle rettigheder til indhold på sitet tilhører KIAtec eller vore partnere og må ikke kopieres, sælges, distribueres eller gengives uden skriftlig tilladelse. Det er dog tilladt for private at printe materialet ud til egen ikke-forretningsmæssig brug, såfremt du ikke redigerer i stoffet, ligesom du samtidig skal printe disse brugerbetingelser og vedhæfte dem, så der ikke er tvivl om betingelserne for brug af materialet over for alle, der måtte komme i berøring med det.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Vi kan til enhver tid ændre i disse betingelser. Sker det, vil det kunne ses under ”Betingelser” her i app’en. Dine data er kun omfattet af og kan kun bruges i overensstemmelse med betingelserne, som de var udformet på det tidspunkt, hvor du accepterede betingelserne.</p>\r\n\r\n<p>\r\n\r\n</p>\r\n\r\n<p>Opleves problemer med funktionerne i CareX, skal henvendelse ske til <a href=\"mailto:support@carex.dk\">support@carex.dk</a></p>\r\n"
                    }
                }
            ],
            [
                "30",
                "Infotekster",
                "16",
                "wlc_default.php",
                "fa-info",
                "1",
                "1",
                "100",
                null
            ],
            [
                "31",
                "404 fejl",
                "16",
                "wlc_default.php",
                "fa-hand-stop-o",
                "1",
                "1",
                "100",
                {
                    "485": {
                        "tab_id": "268",
                        "tab_name": "Siden blev ikke fundet",
                        "sub_id": "31",
                        "text": "<h1>Not Found</h1>\r\n\r\n<p>The requested URL /tt was not found on this server.</p>\r\n\r\n<p> </p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/404-not-found.png\" style=\"height:171px; width:274px\" /></p>\r\n\r\n<p style=\"text-align:center\"> </p>\r\n"
                    }
                }
            ],
            [
                "32",
                "Greve",
                "16",
                "wlc_default.php",
                "fa-ambulance",
                "5",
                "5",
                "100",
                {
                    "486": {
                        "tab_id": "269",
                        "tab_name": "Sygedagpenge",
                        "sub_id": "32",
                        "text": "<p><br />\r\n<iframe frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://www.greve.dk/borger/arbejde-og-ledighed/sygedagpenge/\" width=\"100%\"></iframe></p>\r\n"
                    }
                }
            ],
            [
                "33",
                "Borgerservice",
                "16",
                "wlc_default.php",
                "fa-cart-plus",
                "1",
                "1",
                "100",
                null
            ],
            [
                "34",
                "Ledersparring",
                "16",
                "wlc_default.php",
                "fa-comments-o",
                "1",
                "1",
                "100",
                {
                    "487": {
                        "tab_id": "270",
                        "tab_name": "Information ",
                        "sub_id": "34",
                        "text": "<h3>{RAADGIVNINGSLINJEN}</h3>\r\n\r\n<h3> </h3>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>HER KAN DU MED FORDEL BENYTTE LEDERSPARRING</strong></span></h3>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Når en af dine medarbejdere over en længere periode mistrives eller har haft svært ved at</span> <span style=\"font-size:18px\">finde overskud til at klare sine arbejdsopgaver</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis en sygemeldt medarbejder har brug for hjælp og du ønsker råd i forhold til hvordan du</span> <span style=\"font-size:18px\">bedst kan hjælpe</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder er usikker på, om en af dine medarbejdere får den rette hjælp til at blive rask og vende tilbage til jobbet</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning om forebyggelse og håndtering af stress på</span> <span style=\"font-size:18px\">arbejdspladsen</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du som leder ønsker råd og vejledning i forbindelse med en konflikt i din afdeling</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Hvis du på anden måde føler ledelsesmæssige dilemmaer i forbindelse med en medarbejders</span> <span style=\"font-size:18px\">sygefravær eller udfordringer i arbejdslivet.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\">Rådgivningsteamet er tværfagligt bemandet og består blandt andet af, socialrådgivere, sygeplejersker, læger, kiropraktorer, fysioterapeuter, </span><span style=\"font-size:18px\">arbejdspladskonsulenter og psykologer.</span><br />\r\n </p>\r\n\r\n<h3><span style=\"font-size:18px\"><strong>SÅDAN BRUGER DU LEDERSPARRING</strong></span></h3>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Gå ind under fanen 'Aktiver' </span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Udfyld oplysninger omkring årsag og tryk 'Send'</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil ud fra de indtastede oplysninger, blive kontaktet indenfor 48 timer på hverdage</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:18px\">Du vil modtage en bekræftigelse på mail vedr. din henvendelse</span></p>\r\n\t</li>\r\n</ol>\r\n"
                    },
                    "488": {
                        "tab_id": "271",
                        "tab_name": "Aktiver",
                        "sub_id": "34",
                        "text": "<p style=\"text-align:center\">{LEDERSPARRING}</p>\r\n"
                    }
                }
            ],
            [
                "35",
                "Tidlig Indsats",
                "16",
                "wlc_default.php",
                "fa-american-sign-language-interpreting",
                "1",
                "1",
                "100",
                {
                    "489": {
                        "tab_id": "272",
                        "tab_name": "Info",
                        "sub_id": "35",
                        "text": "<p><iframe align=\"middle\" frameborder=\"1\" height=\"800\" scrolling=\"yes\" src=\"https://amk.kk.dk/tidligindsats\" width=\"100%\"></iframe></p>"
                    }
                }
            ],
            [
                "36",
                "Stress- og Trivsel",
                "16",
                "wlc_stress_og_trivsel.php",
                "fa-bed",
                "195",
                "195",
                "100",
                {
                    "490": {
                        "tab_id": "273",
                        "tab_name": "BEREDSKAB",
                        "sub_id": "36",
                        "text": "<p>{RAADGIVNINGSLINJEN}</p>\r\n"
                    }
                }
            ],
            [
                "37",
                "Hjælp ved Sygdom",
                "16",
                "wlc_default.php",
                "fa-whatsapp",
                "1",
                "1",
                "100",
                {
                    "491": {
                        "tab_id": "274",
                        "tab_name": "Information ",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\"><strong>HVAD ER HJÆLP VED SYGDOM?</strong></span><br />\r\n<span style=\"font-size:18px\">Hjælp ved sygdom leveres af to kompetenceenheder, som hjælper og assisterer dig i forbindelse med kort eller længerevarende sygefravær. </span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:18px\">KIApro er et uvildigt sundheds- og socialfagligt beredskab, som kan hjælpe og rådgiver dig i forbindelse med korterevarende sygdom og sygefravær.</span></li>\r\n\t<li><span style=\"font-size:18px\">Socialrådgivere hos AP Pension, kan rådgive dig og din leder hvis din sygdom bliver langvarig og medfører længerevarende sygefravær. </span><br />\r\n\t </li>\r\n</ul>\r\n\r\n<p><span style=\"font-size:18px\"><strong>SÅDAN AKTIVERER DU BEREDSKABET</strong></span><br />\r\n<span style=\"font-size:18px\">'Hjælp ved sygdom' funktionen sikrer dig hurtig og faglig kompetent rådgivning og vejledning til at aktivere mulige relevante indsatser og derigennem hurtigere at blive frisk igen.</span></p>\r\n\r\n<p><strong><span style=\"font-size:18px\">Korttidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved kortidsfravær' for at aktivere KIApro beredskab</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Udfyld relevante felter og tryk 'Send'</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Du vil herefter modtage en bekræftigelse på mail og blive kontaktet af rådgivningslinjen indenfor 24 timer på hverdage</span></span>.</li>\r\n</ol>\r\n\r\n<p><strong><span style=\"font-size:18px\">Langtidssygefravær</span></strong></p>\r\n\r\n<ol>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Tryk på fanen 'Ved langtidsfravær' for at aktivere socialrådgiver i AP Pension</span></span></li>\r\n\t<li><span style=\"font-size:18px\"><span style=\"font-size:18px\">Ring eller send en mail til socialrådgiver i AP Pension</span></span>.</li>\r\n</ol>\r\n\r\n<p><br />\r\n<span style=\"font-size:18px\">GOD BEDRING!</span></p>\r\n"
                    },
                    "492": {
                        "tab_id": "275",
                        "tab_name": "Ved korttidsfravær",
                        "sub_id": "37",
                        "text": "<p style=\"text-align: center;\">{RAADGIVNINGSLINJEN}</p>\r\n"
                    },
                    "493": {
                        "tab_id": "276",
                        "tab_name": "Ved langtidsfravær",
                        "sub_id": "37",
                        "text": "<p><span style=\"font-size:18px\">Som pensionskunde i AP Pension, har du mulighed for at få rådgivning og vejledning i forbindelse med længerevarende sygefravær, eller ved risiko for at din sygdom kan udvikle sig til langtidssygefravær.</span></p>\r\n\r\n<p style=\"text-align: center;\">{LEDELSESOVERBLIK}<br />\r\n<span style=\"font-size:18px\"><strong>Kontakt socialrådgiver </strong></span><strong><span style=\"font-size:18px\">Céline Pors</span><br />\r\n<img alt=\"\" src=\"/qa_app/include/ckeditor3/kcfinder/upload/images/crp.jpg\" style=\"height:168px; width:112px\" /></strong></p>\r\n\r\n<p style=\"text-align: center;\"><span style=\"font-size:18px\">Telefon: <a href=\"tel:+4539169965\">+20 3916 9965</a><br />\r\nMail: <a href=\"mailto:crp@appension.dk\">crp@appension.dk</a></span></p>\r\n\r\n<p> </p>\r\n\r\n<p> </p>\r\n"
                    }
                }
            ]
        ]
    }
};
//# sourceMappingURL=data.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map