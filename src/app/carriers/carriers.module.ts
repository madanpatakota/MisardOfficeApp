import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from '../enduser/faqs/faqs.component';
import { CarriersComponent } from './carriers.component';
import { JoinusComponent } from './joinus/joinus.component';
import { CurrentOpeningsComponent } from './openings/openings.component';
import { CarriersRoutingModule } from './carriers-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarriersComponent,
    JoinusComponent,
     CurrentOpeningsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarriersRoutingModule
  ]
})
export class CarriersModule { }
