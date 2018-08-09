import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task6subchild',
  templateUrl: './task6subchild.component.html',
  styleUrls: ['./task6subchild.component.css']
})
export class Task6subchildComponent implements OnInit {

  constructor() { }
@Input() subchildMessage:string 
  ngOnInit() {
  }

}
