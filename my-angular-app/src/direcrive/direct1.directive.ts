import {Directive, EventEmitter, HostBinding, HostListener, Output, output} from '@angular/core';

@Directive({
  selector: '[appDirect1]',
  standalone: true
})
export class Direct1Directive {

  constructor() {
  }

  @Output()
  change = new EventEmitter<string>();

  isvdalid: boolean = true;

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.isvdalid ? "#3495eb" : "transparent";
  }

  @HostBinding('class.colortext')
  get textColor() {
    return this.isvdalid
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.isvdalid = !this.isvdalid;
    this.change.emit(this.isvdalid ? 'mouseenter' : 'mouseleave');
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.isvdalid = !this.isvdalid;
    this.change.emit(this.isvdalid ? 'mouseenter' : 'mouseleave');

  }

}
