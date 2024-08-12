import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Poststruct} from "./post.interface";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor(private Httc: HttpClient) {
  }

  postitems$!: Observable<Poststruct[]>;


  ngOnInit() {
    const params = new HttpParams().set('/', 1)
    this.postitems$ =this.Httc.get<Poststruct[]>('https://jsonplaceholder.typicode.com/posts', {params: params})

  }


  @Input({required: true}) title: string = "نام محصول";

  @Input({required: true}) addImage: string = 'assets/img/1.jpg'
  text: string = "نوشتن متن تبلیغاتی جذاب باعث ماندگار شدن برند و به دست گرفتن بازار فروش می‌شود"
  @Output()
  botclick = new EventEmitter<Event>()

  onbotclick(event: Event) {
    this.botclick.emit(event)
  }
}
