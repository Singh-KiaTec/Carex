import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
    templateUrl: 'otp.page.html'
})
export class OtpPage {
    constructor(private keyboard: Keyboard) { }

    ngOnInit() {
        // Tracking

    }
    // openKeyboard(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     this.keyboard.show();
    // }
}
