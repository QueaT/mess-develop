import {Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit , DoCheck {
    @Input() userInfo: { id: number, name: string, apiKey: any };

    constructor() {
    }

    ngOnInit() {
    }
    ngDoCheck(): void {
        console.log(this.userInfo);
    }

}
