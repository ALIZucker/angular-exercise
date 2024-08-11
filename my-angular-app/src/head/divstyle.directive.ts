import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDivstyle]',
  standalone: true
})
export class DivstyleDirective {

  constructor() { }
  colorname='#636362'


  @HostBinding('class.main')
  get main(){
    return true;
  }
  @HostBinding('style.color')
  get color(){
    return this.colorname;
  }
  @HostBinding('style.backgroundColor')
  get color2(){
    return "#70eb4b";
  }
  @HostListener('click')
  clickevent(){
    this.colorname='black';

  }
}
