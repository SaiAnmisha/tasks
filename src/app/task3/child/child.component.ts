import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  message="im the child";
  constructor() { }
  // printtext(text:string){
  //  this.message=text;
  // }
  ngOnInit() {

  }
 

}
