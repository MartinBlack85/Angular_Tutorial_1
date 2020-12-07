import { Component } from '@angular/core';

@Component({
    selector: 'user-input',
    templateUrl: './userInput.component.html',
    styleUrls: ['./userInput.component.css']
})
export class UserInputComponent {
    userName = '';
    allowReset = false;

    constructor() {
        
    }

    // // only used for one way data binding by using the eventName($event) syntax
    // onUserInput(event: Event) {
    //     this.userName = (<HTMLInputElement>event.target).value;
    // }

    userReset() {
        if(this.userName.length !== 0) {
            return this.allowReset = true; 
        }
    }

    onUserReset() {
        this.userName = '';
    }

}