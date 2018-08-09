import { Component,   ViewChild,AfterViewInit } from '@angular/core';
import { SubchildComponent } from '../subchild/subchild.component';

@Component({
  selector: 'app-chill',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {
@ViewChild(SubchildComponent) subchild;
  constructor() { }
message:string;
  ngAfterViewInit (){
    this.message=this.subchild.message;
  }

}
