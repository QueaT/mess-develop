import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {from, fromEvent, Observable, of} from 'rxjs';


import {debounceTime, exhaustMap, filter, map, subscribeOn, switchMap, tap, throttleTime} from 'rxjs/operators';
import {SearchFriendaService} from '../page-elm/services/search-frienda.service';

@Component({
    selector: 'app-friend-search',
    templateUrl: './friend-search.component.html',
    styleUrls: ['./friend-search.component.scss']
})
export class FriendSearchComponent implements OnInit {
    inputValue: string;
    filteredFriends: [];
    @Input() userInfo: { key: string };
    @ViewChild('input') input: ElementRef;

    constructor(private searchFriendaService: SearchFriendaService) {
    }

    ngOnInit() {
        const inputObser = fromEvent(this.input.nativeElement, 'input').pipe(
            debounceTime(500),
            switchMap((event: any) => {
                console.log('ok');
                console.log(event.target.value, this.userInfo.key);
                return this.searchFriendaService.getFriends(event.target.value, this.userInfo);
            })
        );
        inputObser.subscribe((elm: any) => this.filteredFriends = elm);
    }

    addFriend(friendInfo) {
        console.log(friendInfo);
    }

}
