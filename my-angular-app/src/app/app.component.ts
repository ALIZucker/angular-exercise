import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PostComponent} from "../post/post.component";
import {CommonModule} from "@angular/common";
import {HeadComponent} from "../head/head.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, CommonModule, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'محصول اول';
  items: Array<any> = [
    {title: 'محصول اول', image: 'assets/img/1.jpg', description: '', buttonTitle: 'Product1'},
    {title: 'محصول دوم', image: 'assets/img/2.jpg', description: '', buttonTitle: 'Product2'},
    {title: 'محصول سوم', image: 'assets/img/3.jpg', description: '', buttonTitle: 'Product3'},
    {title: 'محصول چهارم', image: 'assets/img/4.webp', description: '', buttonTitle: 'Product4'},
    {title: 'محصول چهارم', image: 'assets/img/4.webp', description: '', buttonTitle: 'Product4'}
  ]
  @ViewChildren('postOne')
  items2!:QueryList<ElementRef> ;

  constructor() {
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.items2.length);

   this.items2.forEach(post => {
     console.log(post.nativeElement);
    //post.nativeElement.style.backgroundColor = 'red';
   })
  }

  onbotClick($event: Event) {
    alert("asdasd")
  }

}
