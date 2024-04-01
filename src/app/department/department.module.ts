import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import {
  AdddepartmentComponent,
  DepartmentComponent,
} from './department.component';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabHeader } from '@angular/material/tabs';

@NgModule({
  declarations: [DepartmentComponent, AdddepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MaterialModule,
  ],
})
export class DepartmentModule {}
