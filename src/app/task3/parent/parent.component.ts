import { ChildComponent } from './../child/child.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-para',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message;
  }
}
