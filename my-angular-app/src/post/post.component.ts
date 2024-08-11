import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements AfterContentInit {
  @Input({required:true}) title:string="نام محصول";
  @ContentChild('po',{read:ElementRef})
  price!:ElementRef;


  @Input({required:true}) addImage:string='assets/img/1.jpg'
  text:string="نوشتن متن تبلیغاتی جذاب باعث ماندگار شدن برند و به دست گرفتن بازار فروش می‌شود"
  @Output()
  botclick=new EventEmitter<Event>()
  onbotclick(event:Event) {
    this.botclick.emit(event)
  }
  ngAfterContentInit() {
  }
}
