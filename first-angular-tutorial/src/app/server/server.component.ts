import { Component } from '@angular/core';

// adding a class decorator for further funtionality, need to pass a javascript object to configure to function as an additional module
@Component({
    // this will function as the custom html tag for this custom component in the app.component.html file
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline;'

    getServerStatus() {
        return this.serverStatus;
    }
}