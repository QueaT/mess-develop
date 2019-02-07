import {Component, ElementRef, EventEmitter, HostListener, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from '../../page-elm/services/register.service';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {
    @ViewChild('load') loadElement: ElementRef;
    loading = false;
    sub = new Subscription();
    display: true;
    displayMess: string;

    constructor(private register: RegisterService) {
    }

    ngOnInit() {
        this.register.hint$.subscribe(data => {
            this.displayMess = data.message;
            this.display = data.status;
            console.log(this.display,data);
        });
    }

    onSubmit(form: HTMLFontElement) {
        this.register.sendData(form);
        const loadd = setInterval(() => {
            this.register.loading(this.loadElement.nativeElement);
            if (this.register.stop) {
                clearInterval(loadd);
            }
        }, 10);
    }


}
