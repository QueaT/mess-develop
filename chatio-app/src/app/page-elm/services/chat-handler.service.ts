import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatHandlerService {
    private hintSource = new Subject<any>();
    public hint$ = this.hintSource.asObservable();
    test = ['jd', 'txt', 'wp', 'kuba', 'ok', 'jebanie', 'cipka', 'chuj'];

    constructor(private http: HttpClient) {
    }

    outputChat(output: object) {
        this.http.post('http://dvdx.nazwa.pl/api/send_msg.php', output).subscribe(
            (respone) => console.log(respone)
        );
    }

    /**
     *  funkcja odpowiedzialna za odbiernie wiadomosci
     */
    inputChat() {
        let iter = 0;
        let zwrot = this.test[0];

        setInterval(() => {
            zwrot = this.test[iter++];
            this.hintSource.next(zwrot);
            if (iter === 6) {
                iter = 0;
            }
        }, 4000);
    }
}
