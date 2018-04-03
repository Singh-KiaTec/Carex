import { Component } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile.page';

@Component({
    selector:'profile-viewer',
    templateUrl: 'profile.html'
})
export class ProfileComponent {
    rootPage: any = ProfilePage;

    constructor(
    ) { }

    ngOnInit() {
        // Tracking
  console.log("in profile");
    }
    
}


