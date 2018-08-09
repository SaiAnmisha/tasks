import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstcomponentComponent, SecondcomponentComponent, ThirdcomponentComponent],
  exports: [FirstcomponentComponent, SecondcomponentComponent, ThirdcomponentComponent]
})
export class Task7Module { }
