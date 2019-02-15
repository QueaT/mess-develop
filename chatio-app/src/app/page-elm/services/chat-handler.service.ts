import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChatHandlerService {

    constructor(private http: HttpClient) {
    }

    outputChat(ele: object) {
        console.log(ele);
        this.http.post('http://dvdx.nazwa.pl/api/send_msg.php', ele).subscribe(
            (respone) => console.log(respone)
        );
    }
}
