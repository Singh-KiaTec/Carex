import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../../pages/notifications/notifications.page';
//import { Storage } from '@ionic/storage';
import { StorageService } from '../../providers/storageservice/storageservice';

@Component({
    selector: 'notifications-viewer',
    templateUrl: 'notifications.html'
})
export class NotificationsComponent {
    rootPage: any = NotificationsPage;


    private newnotification;
    public allnotifications;
    private allstorednotifications;

    constructor(private navParam: NavParams, private navCtrl: NavController, private storageservice: StorageService) {

        this.newnotification = this.navParam.get('resultData');
        this.storageservice.checknotification('allstorednotifications')
         .then( 
             val => { this.allnotifications = val;
            console.log(this.allnotifications)
            },
             error => (console.log("try again"))
         );
        //this.allnotifications = this.storageservice.get('allstorednotifications');
    }
    ngOnInit() {
        // Tracking,


        //this.storageservice.get('allstorednotifications') ? this.allnotifications = this.storageservice.get('allstorednotifications') : this.storageservice.set('allstorednotifications', this.notifiicationList);


        // this.allnotifications = this.storageservice.get('allstorednotifications');

        // Or to get a key/value pair
         
            //return val;
            // this.newnotification = val;
            // console.log(val);
            // return val;


        // this.service.getDetailsdata(uuid, listId)
        // .then(
        // detailsData => { this.detailsData = detailsData; this.setData() },
        // error => (console.log("try again"))
        // );

    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
     

        // this.newnotification =  this.storageservice.checknotification('allstorednotifications').then(function (val) {
        //     //return val;
        //     console.log(val);
        //     return val;
        // });
        console.log(this.allnotifications);
        // setTimeout(() => {
        //     //     if (this.newnotification) {
        //     //         this.allnotifications = this.storageservice.get('allstorednotifications');
        //     //         let notification = [{
        //     //             'title': this.newnotification.notification.payload.title,
        //     //             'body': this.newnotification.notification.payload.body
        //     //         }];
        //     //         this.allnotifications.push(notification);
        //     //         this.storageservice.set('allstorednotifications', this.allnotifications);

        //     //     }
        //     console.log(this.allnotifications);
        //     // else {
        //     //     if (this.newnotification) {
        //     //         let notification = [{
        //     //             'title': this.newnotification.notification.payload.title,
        //     //             'body': this.newnotification.notification.payload.body
        //     //         }];
        //     //         this.allnotifications.push(notification);
        //     //         this.storageservice.set('allstorednotifications', this.allnotifications);
        //     //     }
        //     //     this.storageservice.set('allstorednotifications', []);
        //     // }
        //     console.log("in notify ");
        //     console.log(this.newnotification);
        //     console.log(this.allnotifications);

        // }, 1000);
        setTimeout(() => {
              
                console.log("in notify ");
                console.log(this.newnotification);
                this.allstorednotifications = this.allnotifications;
    
            }, 1000);
    }

}


