import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemmasterComponent } from './itemmaster.component';

const routes: Routes = [
  {
    path: '',
    component: ItemmasterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemmasterRoutingModule {}
