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
    private statusFriend = {
        status: true,
        mess: 'Moi znajomi'
    };
    public infoUser = null;
    public showUser = false;


    constructor(private loggedUser: RegisterService) {
    }

    ngOnInit() {
        if (this.loggedUser.toMain !== undefined) {
            this.friendArr = Object.values(this.loggedUser.toMain['user_friends']).filter(friend => friend !== true);
            if (this.friendArr[0] === false) {
                this.statusFriend.status = false;
                this.statusFriend.mess = 'Brak znajomych :(';
            }
        }
    }

    getUser(id: number, elm, key) {
        this.infoUser = {
            id: id,
            name: elm,
            key: key,
        };
        this.showUser = true;
    }
}


