


import { Component, ViewChild,AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-paren',
  templateUrl: './paren.component.html',
  styleUrls: ['./paren.component.css']
})
export class ParenComponent implements AfterViewInit {
@ViewChild(ChildComponent) chil;
  constructor() { }
message:string
  ngAfterViewInit() {
    this.message=this.chil.message;
  }


}
