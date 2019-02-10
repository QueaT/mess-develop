import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {RegisterService} from './page-elm/services/register.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'chatio-app';
    mainApp: boolean;
   private sub = new Subscription();

    constructor(private regiS: RegisterService) {
        this.mainApp = false;
    }

    ngOnInit(): void {
        this.sub.add(this.regiS.sender.subscribe(data => this.mainApp = data));
    }
}
