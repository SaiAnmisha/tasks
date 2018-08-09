import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {
message="iam the child1 message"
  constructor() { }

  ngOnInit() {
  }

}
