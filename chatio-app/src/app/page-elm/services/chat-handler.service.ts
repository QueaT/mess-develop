import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatHandlerService {
    private hintSource = new Subject<any>();
    public hint$ = this.hintSource.asObservable();
    private checkSrc = new Subject<any>();
    public check$ = this.checkSrc.asObservable();
    test = ['jd', 'txt', 'wp', 'kuba', 'ok', 'jebanie', 'cipka', 'chuj'];

    constructor(private http: HttpClient) {
    }

    /**
     *  wysylanie wiadomosci
     */

    outputChat(output: object) {
        this.http.post('http://dvdx.nazwa.pl/api/send_msg.php', output).subscribe();
    }

    /**
     *  funkcja odpowiedzialna za odbiernie wiadomosci
     */
    inputChat(input: object) {
        if (input !== undefined) {
            this.http.post('http://dvdx.nazwa.pl/api/get_msg.php?fbclid=IwAR3frG4PIGeMMKrracsN0cOeaQmOa5W06kAokM9aGVRQIRGTkXeW9SRIydo', input).subscribe(
                (response) => {
                    this.hintSource.next(response);
                }
            );
        }
    }

}
