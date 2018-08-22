import { Component, Input } from '@angular/core';



@Component({
    selector:'contactus-viewer',
    templateUrl: 'contactus.html'
})
export class ContactusComponent {

    constructor() { }


     @Input() content: string;
    ngOnInit() {
     
}
}


