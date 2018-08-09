import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-task6child',
  templateUrl: './task6child.component.html',
  styleUrls: ['./task6child.component.css']
})
export class Task6childComponent implements OnInit {

  
  constructor() {}
  @Input() childMessage: string;

  ngOnInit() {
  }
}
