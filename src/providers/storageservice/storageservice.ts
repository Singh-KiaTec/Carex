
import { Component, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageService {
    private notifiicationList = [{
        'title': 'Carex',
        'body': 'All your notificatiions'
    }];

    constructor(public storage: Storage) {

    }
    set(name, value):any {
        this.storage.set(name, value).then((val)=> {
        return val;
        });

    }

    get(name) :Promise<boolean> {
        return this.storage.ready().then(() => this.storage.get(name));

    }
    checknotification(storageName) {
        return this.get(storageName) ? this.storage.get(storageName).then((val) => {
            return val;
        }) : this.storage.set(storageName, this.notifiicationList).then((val) => {
            return val;
    });
}
    setnewNotification(storageName, value) {
        this.storage.set(storageName, value).then(()=> {
         console.log("done all set local");   
            });
    }

    validatesetNotification(name, resultData) {
        let data:any = resultData;
        let notification = {
            'title': data.payload.title,
            'body': data.payload.body
        };
        console.log(data);
         this.checknotification(name).then((val) => {
            //return val;
            console.log(val);
            val.push(notification);
            this.set(name, val);

        
        });


        // setTimeout(() => {
        //     allnotifications.push(notification);
        //     this.set(name, allnotifications);
        // }, 2000)

    }
    clear(){
        this.storage.clear();
    }

}