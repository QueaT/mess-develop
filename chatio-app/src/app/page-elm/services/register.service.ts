import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {
  private hintSource = new Subject<any>();
  public load = 0;
  stop = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  sendData(form: HTMLFontElement) {
    this.http.post('http://dvdx.nazwa.pl/test.php', form['value']).subscribe((
        (response) => this.hintSource.next(console.log(response))
    ));

  }

  loading(element) {
    this.load++;
    element.style.width = this.load + '%';
    this.endLoad();
  }

  endLoad() {
    if (this.load > 100) {
      this.stop = true;
    }
  }
}
