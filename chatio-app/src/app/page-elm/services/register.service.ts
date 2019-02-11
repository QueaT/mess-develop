import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class RegisterService implements OnInit {
    private hintSource = new Subject<any>();
    public hint$ = this.hintSource.asObservable();
    private sendToMain = new Subject<any>();
    public  sender = this.sendToMain.asObservable();
    private  mainApp = new Subject<any>();
    public  mainAppSend$ = this.mainApp.asObservable();
    public load = 0;
    loader = false;
    stop = false;
    public  toMain;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    sendData(form: HTMLFontElement) {
        this.loader = true;
        this.http.post('http://dvdx.nazwa.pl/api/register.php', form['value']).subscribe((
            (response: any) => {
                console.log(response)
                this.hintSource.next(response);
            }
        ));

    }

    loading(element) {
        this.load++;
        element.style.width = this.load + '%';
        this.endLoad();
    }

    endLoad() {
        if (this.load === 100) {
            this.stop = true;
        }
    }

    LoginData(form: HTMLFontElement) {
        this.loader = true;
        this.http.post('http://dvdx.nazwa.pl/api/login.php', form['value']).subscribe((
            (response: any) => {
                this.hintSource.next(response);
               // this.mainApp.next(response);
                this.toMain = response;
            }
        ));

    }

    deleteTitle(elm: boolean) {
        this.sendToMain.next(elm);
    }
}
