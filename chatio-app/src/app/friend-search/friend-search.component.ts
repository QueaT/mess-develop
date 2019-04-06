import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {from, fromEvent, Observable, of} from 'rxjs';


import {debounceTime, exhaustMap, filter, map, subscribeOn, switchMap, tap, throttleTime} from 'rxjs/operators';
import {SearchFriendaService} from '../page-elm/services/search-frienda.service';
import {RegisterService} from '../page-elm/services/register.service';

@Component({
    selector: 'app-friend-search',
    templateUrl: './friend-search.component.html',
    styleUrls: ['./friend-search.component.scss']
})
export class FriendSearchComponent implements OnInit {
    inputValue: string;
    filteredFriends: [];
    @Input() userInfo: string;
    @ViewChild('input') input: ElementRef;

    constructor(private searchFriendaService: SearchFriendaService, private loggedUser: RegisterService) {
    }

    ngOnInit() {
        const inputObser = fromEvent(this.input.nativeElement, 'input').pipe(
            debounceTime(500),
            switchMap((event: any) => {
                return this.searchFriendaService.getFriends(event.target.value, this.userInfo);
            })
        );
        inputObser.subscribe((elm: any) => {
            console.log(elm);
            this.filteredFriends = elm;
        });
    }

    addFriend(friendKey) {
        const friendInfo = {
            user_key: this.userInfo,
            friend_key: friendKey
        };
        this.searchFriendaService.addFriends(friendInfo).subscribe(resp => {
            console.log(resp);
        });
    }

}
