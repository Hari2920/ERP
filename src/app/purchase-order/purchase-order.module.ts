import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { MaterialModule } from '../../material/material.module';
import {
  AddpurchaseorderComponent,
  LineItemsComponent,
  PurchaseOrderComponent,
} from './purchase-order.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PurchaseOrderComponent,
    AddpurchaseorderComponent,
    LineItemsComponent,
  ],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PurchaseOrderModule {}
