import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appCheckpass]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckpassDirective,
    multi: true
  }]
})
export class CheckpassDirective implements Validator {
  @Input() appCheckpass: string;
  @Input() elemnt;

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const toControl = control.parent.get(this.appCheckpass);
    if (toControl && toControl.value !== control.value) {
      if (control.value > 1) {
        this.elemnt.style.color = 'red';
      }
      return {'notEqual': true};
    } else {
      if (control.value.length > 1) {
        this.elemnt.style.color = '#29822c';
        this.elemnt.style.fontSize = 1.9 + 'rem';
      }
      return null;
    }

  }

}
