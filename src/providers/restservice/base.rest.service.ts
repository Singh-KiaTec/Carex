import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { App } from 'ionic-angular';
// import { NotificationsPage } from '../../pages/notifications/notifications.page'
import { LoginPage } from '../../pages/login/login.page';
import { StorageService } from '../storageservice/storageservice';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { AuthService } from '../authenticationservice/auth.service';


@Injectable()
export class BaseRestService {
    // URL to web api
    // private navCtrl: Nav;
    private nav: any;
    //rootPage: any = LoginPage;
    private headers;
    private options;
    //private platform: Platform;
    private baseUrl = '/';//"http://udv-admin.carex.dk/config/jsondata/";
    private udvenvi = " https://udv-tryg.carex.dk";
    private prodUrl = "http://trygsundhed.carex.dk/";
    private formdata;

    constructor(private app: App, private storageservice: StorageService, private auth: AuthService, private http: HttpClient, private platform: Platform) {
        //  this.navCtrl = app.getActiveNavs();
        //this.enviUrl = this.auth.getEnvironment();
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            "Access-Control-Allow-Headers": "X-Requested-With"
        });
        if (platform.is('mobile')) {
            this.baseUrl = "http://udv-admin.carex.dk/config/";
        }
        this.options = new RequestOptions({ headers: this.headers });
    }
    // URL to web api


    ionViewDidEnter() {
        console.log(this.app.getActiveNavs());
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        console.log(this.app.getActiveNavs());
        this.getPlatform();
        console.log(this.baseUrl);
    }
    getPlatform() {
        if (this.platform.is('mobile')) {
            this.baseUrl = "http://udv-admin.carex.dk/config/";
        }
    }
    pushNotification(resultData) {
        //this.nav = this.app.getRootNavById('n4');
        // if (this.nav._views[1].name != "NotificationsPage") {
        //    // this.storageservice.validatesetNotification('allstorednotifications', resultData);
        //    this.nav.push(NotificationsPage, { 'resultData': resultData });//WOR
        // }
        // this.app.getActiveNavs().push(NotificationsPage,{'resultData': resultData});
        //WORKS this.app.getRootNav().push(NotificationsPage,{'resultData': resultData});
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
    navigateTo(pagename, options) {
        console.log(pagename);

        //this.nav = this.app.getRootNavById('n4');
        let navoptions = options ? options : {};

        //this.navCtrl.push(LoginPage);
        //this.nav.push(LoginPage);//WOR
        //  this.app.getRootNav().push(LoginPage,navoptions);
        //this.nav.setRoot(LoginPage);
        //this.app.getActiveNavs().push('LoginPage');
        // this.app.getActiveNavs()[0].push(LoginPage);
        //this.nav.pop(0);
        //WORKS
        this.app.getRootNav().push(LoginPage);
        //  this.app.getActiveNavs().push("NotificationsPage");
    }
    getWelcomeData() {

        //return this.http.get(this.baseUrl + 'jsondata/welcome.json', this.options).toPromise();
        return this.http.get(this.prodUrl + 'config/jsondata/welcome.php').toPromise();
    }
    getloginData() {
        //return this.http.get(this.baseUrl + 'jsondata/welcome.json', this.options).toPromise();
        return this.http.get(this.prodUrl + 'config/jsondata/login.php').toPromise();
    }
    getTermsandconditionsData(uuid) {
        this.formdata = new FormData();
        this.formdata.append('action', 'samtykke_read');
        //this.formdata.append('listedefinition_uuid', 'e4388fbc-c139-4542-894e-b0d14f34db30');
        this.formdata.append('autorisation', uuid);
       // this.formdata.append('objekt_uuid', uuid);
        //app uuid this might change for every app app_uuid
        this.formdata.append('itsystem_uuid', 'ae9055e5-210e-4a0b-9d39-b334c12cf744');
        this.formdata.append('samtykkeprocestrin', 'GeneralAccept');
        this.formdata.append('samtykkeorganisation', '7fb031ae-0cb9-4a04-8407-1156d3d52108');
        this.formdata.append('language', 'da');
        this.formdata.append('skabelon', '1');

        return this.http.post('https://qa-api.carex.dk/api/endpoints/api_services.php', this.formdata, this.options).toPromise();
        //   return this.http.post(this.prodUrl + 'config/jsondata/termsandconditions.php', this.formdata, this.options).toPromise();

    }

    saveTermsandconditions(activestatus, uuid) {
        this.formdata.append('action', 'samtykke_create');
        this.formdata.append('listedefinition_uuid', 'e4388fbc-c139-4542-894e-b0d14f34db30');
        this.formdata.append('autorisation', uuid);
        this.formdata.append('itsystem_uuid','ae9055e5-210e-4a0b-9d39-b334c12cf744');
        this.formdata.append('samtykkeprocestrin', 'GeneralAccept');
        this.formdata.append('samtykkeorganisation', '7fb031ae-0cb9-4a04-8407-1156d3d52108');
        this.formdata.append('language', 'da');
        this.formdata.append('response', activestatus);
        return this.http.post('https://qa-api.carex.dk/api/endpoints/api_services.php', this.formdata, this.options).toPromise();
    }
    saveCPR(pid, cpr,activestatus,uuid){
        this.formdata = new FormData();
        this.formdata.append('action', 'samtykke_create_cpr');
        //this.formdata.append('listedefinition_uuid', 'e4388fbc-c139-4542-894e-b0d14f34db30');
        this.formdata.append('autorisation', uuid);
        this.formdata.append('itsystem_uuid', 'ae9055e5-210e-4a0b-9d39-b334c12cf744'); // tryg app
        this.formdata.append('samtykkeprocestrin', 'cpr');
        this.formdata.append('nemidpid', pid);
        this.formdata.append('cpr', cpr);
        this.formdata.append('samtykkeorganisation', '7fb031ae-0cb9-4a04-8407-1156d3d52108');
        this.formdata.append('language', 'da');
        this.formdata.append('response', activestatus);
        return this.http.post('https://qa-api.carex.dk/api/endpoints/api_services.php', this.formdata, this.options).toPromise();
    }
    checkactiveList(uuid){
        this.formdata = new FormData();
        this.formdata.append('action', 'samtykke_list_aktive');
        this.formdata.append('autorisation', uuid);
       // this.formdata.append('objekt_uuid',uuid);
        this.formdata.append('itsystem_uuid', 'ae9055e5-210e-4a0b-9d39-b334c12cf744'); // tryg app
        this.formdata.append('samtykkeorganisation', '7fb031ae-0cb9-4a04-8407-1156d3d52108');
        this.formdata.append('language', 'da');
        return this.http.post('https://qa-api.carex.dk/api/endpoints/api_services.php', this.formdata, this.options).toPromise();
    }
    getCustomerData() {
        console.log(this.prodUrl);
        return this.http.get(this.prodUrl + 'config/jsondata/trygv3_qa.php', this.options).toPromise();
    }
    getsmartSearchData() {
        //return this.http.get(this.prodUrl + 'config/jsondata/searchlist.php', this.options).toPromise();
        return this.http.get(this.prodUrl + 'config/jsondata/smartsearch__dev.php', this.options).toPromise();
    }
    logout(url) {
        this.storageservice.clear();
        return this.http.get(url + '/logout.php', this.options).toPromise();
    }
    login(username, password) {
        this.formdata = new FormData();

        this.formdata.append('action', 'login');
        // exisitng test in udv tesflight web usign this this.formdata.append('username', username);
        this.formdata.append('id', username);
        this.formdata.append('password', password);
        return this.http.post('https://qa-idp.carex.dk/endpoints/login_services.php', this.formdata, this.options).toPromise();
       
         // exisitng test in udv tesflight web usign  return this.http.post('https://qa-api.carex.dk/api/endpoints/login_v2.php', this.formdata, this.options).toPromise();
        //existing prod return this.http.post('https://api.carex.dk/api/endpoints/login.php', this.formdata, this.options).toPromise();
        //existing prod return this.http.post('https://api.carex.dk/api/endpoints/login.php', this.formdata, this.options).toPromise();
    }
    getEnvironment() {
        return this.http.get(this.prodUrl + 'config/jsondata/envi.php', this.options).toPromise();
    }
    getOtherRelations() {
        console.log(this.baseUrl);
        return this.http.get(this.prodUrl + 'config/jsondata/otherrelations.php', this.options).toPromise();
    }
    getProfileContent() {
        return this.http.get(this.prodUrl + 'config/jsondata/profile.php', this.options).toPromise();

    }
    getMenuItems() {
        return this.http.get(this.prodUrl + 'config/jsondata/menu.php', this.options).toPromise();
    }
    getSearchPage() {
        return this.http.get(this.prodUrl + 'config/jsondata/search.php', this.options).toPromise();
    }
    checklogin() {
        return this.http.get("https://test-tryg.carex.dk/", this.options).toPromise();
    }
    getappVersion() {
        return this.http.get(this.prodUrl + 'config/jsondata/appversion.php', this.options).toPromise();
    }
    sendOtp(username) {
        this.formdata = new FormData();

        this.formdata.append('action', 'getOTP');
        this.formdata.append('username', username);
        return this.http.post('https://qa-idp.carex.dk/endpoints/login_services.php', this.formdata, this.options).toPromise();
    }
    verifyOtp(id, otp) {
        this.formdata = new FormData();

        this.formdata.append('action', 'validateOTP');
        this.formdata.append('id', id);
        this.formdata.append('otp', otp);
        return this.http.post('https://qa-idp.carex.dk/endpoints/login_services.php', this.formdata, this.options).toPromise();
    }
    validateCPR(pid, cpr) {
        this.formdata = new FormData();

        this.formdata.append('action', 'validatecpr');
        this.formdata.append('pid', pid);
        this.formdata.append('cprnumber', cpr);
        return this.http.post('https://udv-admin.carex.dk/nemid/validatecpr.php', this.formdata, this.options).toPromise();
    }
    changePassword(id, password) {
        this.formdata = new FormData();

        this.formdata.append('action', 'changePassword');
        this.formdata.append('id', id);
        this.formdata.append('password', password);
        return this.http.post('https://qa-idp.carex.dk/endpoints/login_services.php', this.formdata, this.options).toPromise();
    }
    loginUdv(id, password) {
        this.formdata = new FormData();
        this.formdata.append('action', 'login');
        this.formdata.append('id', id);
        this.formdata.append('password', password);
        return this.http.post('https://qa-idp.carex.dk/endpoints/login_services.php', this.formdata, this.options).toPromise();
    }
    getQuestionary() {
        return this.http.get(this.prodUrl + 'config/jsondata/question.php', this.options).toPromise();

    }
    enterusertoreset() {
        return this.http.get(this.prodUrl + 'config/jsondata/enterusertoreset.php', this.options).toPromise();
    }
    getIdverifyData() {
        return this.http.get(this.prodUrl + 'config/jsondata/idverify.php', this.options).toPromise();
    }
    getCprData() {
        return this.http.get(this.prodUrl + 'config/jsondata/cpr.php', this.options).toPromise();
    }
    getIdsaveData() {
        return this.http.get(this.prodUrl + 'config/jsondata/idsave.php', this.options).toPromise();
    }
    getNemidData() {
        return this.http.get(this.prodUrl + 'config/jsondata/nemid.php', this.options).toPromise();
    }
    getOtpData() {
        return this.http.get(this.prodUrl + 'config/jsondata/enterotp.php', this.options).toPromise();
    }
    getchangepasswordData(){
        return this.http.get(this.prodUrl + 'config/jsondata/changepassword.php', this.options).toPromise();
    }
}
