import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantmasterRoutingModule } from './plantmaster-routing.module';
import {
  AddplantComponent,
  PlantmasterComponent,
} from './plantmaster.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlantmasterComponent, AddplantComponent],
  imports: [
    CommonModule,
    PlantmasterRoutingModule,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class PlantmasterModule {}
