import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemmasterRoutingModule } from './itemmaster-routing.module';
import { AddItemComponent, ItemmasterComponent } from './itemmaster.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ItemmasterComponent, AddItemComponent],
  imports: [
    CommonModule,
    ItemmasterRoutingModule,
    MaterialModule,
    FormsModule,

    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class ItemmasterModule {}
