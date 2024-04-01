import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddroleComponent, RoleComponent } from './role.component';
import { MatOption } from '@angular/material/core';

@NgModule({
  declarations: [RoleComponent, AddroleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatOption,
  ],
})
export class RoleModule {}
