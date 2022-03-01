import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TownspeopleComponent } from './townspeople/townspeople.component';



@NgModule({
  declarations: [
    TownspeopleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TownspeopleComponent
  ]
})
export class NpcsModule { }
