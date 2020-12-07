import { Component } from '@angular/core';

// adding a class decorator for further funtionality, need to pass a javascript object to configure to function as an additional module
@Component({
    // this will function as the custom html tag for this custom component in the app.component.html file
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline;'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}