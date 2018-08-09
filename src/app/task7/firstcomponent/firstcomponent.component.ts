import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondcomponentComponent } from '../secondcomponent/secondcomponent.component';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
@ViewChild(SecondcomponentComponent) chilld;
message:string;
  constructor() { }

  ngOnInit() {
    this.message=this.chilld.message;
  }

}
