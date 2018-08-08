import { Task2Module } from './task2/task2.module';
import { Task1Module } from './task1/task1.module';
import { PrintconsoleComponent } from './task2/printconsole/printconsole.component';
import { InputdataComponent } from './task1/inputdata/inputdata.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,PrintconsoleComponent,InputdataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
