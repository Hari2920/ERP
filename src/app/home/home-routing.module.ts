import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'department',
        loadChildren: () =>
          import('../department/department.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: 'role',
        loadChildren: () =>
          import('../role/role.module').then((m) => m.RoleModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'plant',
        loadChildren: () =>
          import('../plantmaster/plantmaster.module').then(
            (m) => m.PlantmasterModule
          ),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('../store/store.module').then((m) => m.StoreModule),
      },
      {
        path: 'item',
        loadChildren: () =>
          import('../itemmaster/itemmaster.module').then(
            (m) => m.ItemmasterModule
          ),
      },
      {
        path: 'vendor',
        loadChildren: () =>
          import('../vendor/vendor.module').then((m) => m.VendorModule),
      },
      {
        path: 'purchaseorder',
        loadChildren: () =>
          import('../purchase-order/purchase-order.module').then(
            (m) => m.PurchaseOrderModule
          ),
      },
      {
        path: 'grn',
        loadChildren: () =>
          import('../grn/grn.module').then((m) => m.GrnModule),
      },
      {
        path: 'jobs',
        loadChildren: () =>
          import('../applicant/applicant.module').then(
            (m) => m.ApplicantModule
          ),
      },
      // {
      //   path: 'logout',
      //   loadChildren: () =>
      //     import('../login/login.module').then((m) => m.LoginModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
