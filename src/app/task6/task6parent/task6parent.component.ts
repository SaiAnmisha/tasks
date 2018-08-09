import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6parent',
  templateUrl: './task6parent.component.html',
  styleUrls: ['./task6parent.component.css']
})
export class Task6parentComponent implements OnInit {

  constructor() { }
  parentMessage = "message from parent";
  ngOnInit() {
  }
}
