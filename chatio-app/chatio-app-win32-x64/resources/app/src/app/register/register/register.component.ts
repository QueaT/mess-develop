import {Component, ElementRef, EventEmitter, HostListener, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from '../../page-elm/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('load') loadElement: ElementRef;

  constructor(private register: RegisterService) {
  }

  ngOnInit() {
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
