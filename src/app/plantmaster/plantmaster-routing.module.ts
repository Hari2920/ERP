import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantmasterComponent } from './plantmaster.component';

const routes: Routes = [
  {
    path: '',
    component: PlantmasterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantmasterRoutingModule {}
