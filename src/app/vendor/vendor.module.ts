import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { VendorRoutingModule } from './vendor-routing.module';
import { AddvendorComponent, VendorComponent } from './vendor.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [VendorComponent, AddvendorComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MaterialModule,
    FormsModule,

    ReactiveFormsModule,
  ],
})
export class VendorModule {}
