import { Component } from '@angular/core';
import {DivstyleDirective} from "./divstyle.directive";
import {DivstructureDirective} from "./divstructure.directive";

@Component({
  selector: 'app-head',
  standalone: true,
    imports: [
        DivstyleDirective,
        DivstructureDirective
    ],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

  onclicked() {
    alert("asdas")
  }
}
