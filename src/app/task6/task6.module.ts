import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task6parentComponent } from './task6parent/task6parent.component';
import { Task6childComponent } from './task6child/task6child.component';
import { Task6subchildComponent } from './task6subchild/task6subchild.component';





@NgModule({
  imports: [
    CommonModule,BrowserModule
  ],
  declarations: [Task6parentComponent,Task6childComponent,Task6subchildComponent],
  exports: [Task6childComponent,Task6parentComponent,Task6subchildComponent]
})
export class Task6Module { }
