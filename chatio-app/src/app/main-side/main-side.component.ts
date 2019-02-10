import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {RegisterService} from '../page-elm/services/register.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-main-side',
    templateUrl: './main-side.component.html',
    styleUrls: ['./main-side.component.scss']
})
export class MainSideComponent implements OnInit {
    private sub = new Subscription();
    public friendArr = [];
    public newFriends = [];

    constructor(private loggedUser: RegisterService) {
    }

    ngOnInit() {
        // this.sub.add(this.loggedUser.mainAppSend$.subscribe(data => {
        //     this.friendArr = Object.values(data.user_friends);
        //     console.log(this.friendArr);
        // }));
        if (this.loggedUser.toMain !== undefined) {
            console.log(this.loggedUser.toMain);
            this.friendArr = Object.values(this.loggedUser.toMain['user_friends']);
        }
    }
}


