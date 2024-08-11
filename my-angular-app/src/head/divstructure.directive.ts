import {Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDivstructure]',
  standalone: true
})
export class DivstructureDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  @Input()
  set appDivstructure(content:string) {
    if (content=="click"){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else {
      this.viewContainerRef.clear();
    }
  }
  @HostListener('click', ['$event'])
  clickevent(){
    alert('click1');
  }
}
