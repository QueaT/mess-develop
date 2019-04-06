import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {delay, filter, flatMap, map, switchMap, tap, throttleTime, toArray} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchFriendaService {

    httpHeaders = new HttpHeaders({
        'Content-Type': 'search_name',
    });

    constructor(private https: HttpClient) {
    }

    getFriends(searchedFriend: string, key: string) {
        console.log(key);
        const send = {
            user_name: searchedFriend,
            user_key: key
        };
        return this.https.post('http://dvdx.nazwa.pl/api/search_user.php', send).pipe(switchMap((data: Observable<any>) => {
            return from(data).pipe(filter(elm => {
                return elm.name.toLowerCase().includes(searchedFriend.toLowerCase());
            }), toArray());
        }));
    }
}
