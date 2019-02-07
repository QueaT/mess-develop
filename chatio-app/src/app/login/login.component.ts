import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../page-elm/services/register.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    showStatus: string;
    load: boolean;
    mainLink = false;

    constructor(private loginServ: RegisterService, private router: Router) {
    }

    ngOnInit() {
        this.load = false;
        this.loginServ.hint$.subscribe(data => {
            this.showStatus = data.message;
            if (data.status === true) {
                setTimeout(() => {
                    this.load = false;
                    this.router.navigate(['/chatio']);
                    this.mainLink = true;
                }, 2000);
            }
        });
    }

    onSubmit(form: HTMLFontElement) {
        this.load = true;
        this.loginServ.LoginData(form);
        setTimeout(() => {
            this.load = false;
        }, 2000);
    }


}
