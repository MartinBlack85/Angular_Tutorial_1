import { Component, OnInit } from '@angular/core';

@Component({

  //default element-style selector for the htmlt template:
  selector: 'app-servers',

  // by using the [] notation we turn this html template reference into an attribute selector
  // selector: '[app-servers]',

  // we also can use the .class selector for the html template:
  // selector: '.app-servers',

  // every component needs an html template, templateUrl for external html template file or using an inline template:
  // can use normal string notation, or can use javascript string notation using: ``
  // for longer than 3 lines of html template, better to use an external html template file
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() { 
    // after 2 seconds the anonim arrow function in the constructor will be executed and enables the button in the html by using data binding
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  // function for user input event:
  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // function for event binding, the event will call it which is triggered by a user
  onCreateServer() {
    this.serverCreationStatus = "Server was created, Server name is: " + this.serverName;
  }

}
