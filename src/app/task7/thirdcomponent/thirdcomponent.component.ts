import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-thirdcomponent',
  templateUrl: './thirdcomponent.component.html',
  styleUrls: ['./thirdcomponent.component.css']
})
export class ThirdcomponentComponent implements OnInit {
  @Input() childMessage:string;
  constructor() { }


  ngOnInit() {
  }

}
