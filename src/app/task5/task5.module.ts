
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParenComponent } from './paren/paren.component';
import { ChildComponent } from './child/child.component';
import { SubchildComponent } from './subchild/subchild.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParenComponent,ChildComponent,SubchildComponent],
  exports : [ParenComponent, ChildComponent, SubchildComponent]
})
export class Task5Module { }
