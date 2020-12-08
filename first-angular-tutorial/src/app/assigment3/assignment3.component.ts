import { Component } from '@angular/core';

@Component({
    selector: 'assignment3',
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

    adminPassword = 'AdminPassword: SuperUser';
    showPassword = false;
    logs = 0;
    detailsButtonLog = [];
    showSecret = false;
    log= [];

    // for own solution
    onClickDetails() {
        if(this.showPassword === false) {
          this.showPassword = true;
        }
        else if(this.showPassword === true) {
          this.showPassword = false;
        }
        this.logs++;
        this.detailsButtonLog.push(this.logs)
      }
    
      // for own solution
      getBlue() {
        return this.detailsButtonLog.length >= 5 ? 'blue' : 'white';
      }

    // example solution
    onToggleDetails() {
        this.showSecret = !this.showSecret;
        //this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }

}