import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control/control.component';
import { OrderControlRoutingModule } from './order-control-routing.module';



@NgModule({
  declarations: [
    ControlComponent
  ],
  imports: [
    CommonModule,
    OrderControlRoutingModule
  ]
})
export class OrderControlModule { }