import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import {
  AddjdComponent,
  ApplicantComponent,
  JobApplyComponent,
} from './applicant.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicantComponent, AddjdComponent, JobApplyComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ApplicantModule {}
