import { Task5Module } from './task5/task5.module';

import { PrintconsoleComponent } from './task2/printconsole/printconsole.component';
import { InputdataComponent } from './task1/inputdata/inputdata.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Task4Module } from './task4/task4.module';
import { Task3Module } from './task3/task3.module';
import { Task6Module } from './task6/task6.module';
import { Task7Module } from './task7/task7.module';
// import { Task5Component } from './task5/task5.component';


@NgModule({
  declarations: [
    AppComponent,PrintconsoleComponent,InputdataComponent
  ],
  imports: [
    BrowserModule,Task4Module,Task3Module,Task5Module,Task6Module,Task7Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
