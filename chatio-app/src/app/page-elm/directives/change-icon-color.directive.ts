import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeIconColor]'
})
export class ChangeIconColorDirective implements OnInit {
  @Input() appChangeIconColor;
  @Input() elemnt;

  constructor(private elementRef: ElementRef, private rerender: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('input') changeValue(eventData: Event) {
    if (this.appChangeIconColor.length > 2) {
      this.elemnt.style.color = '#29822c';
      this.elemnt.style.fontSize = 1.9 + 'rem';
    } else {
      this.elemnt.style.color = 'red';
    }
  }

}
