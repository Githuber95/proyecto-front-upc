import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { SummaryComponent } from './summary/summary.component';
import { SalesComponent } from './sales/sales.component';


@NgModule({
  declarations: [
    PurchaseComponent,
    SummaryComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
