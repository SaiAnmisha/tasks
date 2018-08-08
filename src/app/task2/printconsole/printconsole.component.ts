import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printconsole',
  templateUrl: './printconsole.component.html',
  styleUrls: ['./printconsole.component.css']
})
export class PrintconsoleComponent implements OnInit {
  
  printtext(text){
    console.log(text);
  }
  constructor() { }

  ngOnInit() {
  }


}
