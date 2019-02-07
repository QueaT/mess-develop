import {Component} from '@angular/core';
import {RegisterService} from './page-elm/services/register.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'chatio-app';
    mainApp: boolean;


}
