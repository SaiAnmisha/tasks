import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {
message="iam the subchild";
  constructor() { }

  ngOnInit() {
  }

}
