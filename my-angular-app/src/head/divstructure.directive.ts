import {Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Structvalue} from "./head.interface"

@Directive({
  selector: '[appDivstructure]',
  standalone: true
})
export class DivstructureDirective implements OnInit{

  constructor(private templateRef: TemplateRef<Structvalue>, private viewContainerRef: ViewContainerRef) {
  }

  context!: Structvalue
  title:string="عنوان دوم"

  ngOnInit() {
    this.context = {
      title: this.title,
      control: {
        changetitle: ()=>this.changeTitle()
      }
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
  }
  changeTitle(): void {
      this.title="topic value"
    this.context.title = this.title

  }
}
