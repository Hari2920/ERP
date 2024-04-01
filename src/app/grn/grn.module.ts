import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrnRoutingModule } from './grn-routing.module';
import {
  AddgrnComponent,
  GrnComponent,
  GrnlineitemComponent,
} from './grn.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GrnComponent, AddgrnComponent, GrnlineitemComponent],
  imports: [
    CommonModule,
    GrnRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GrnModule {}
