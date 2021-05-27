import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'device-list', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'device-list',
        loadChildren: () =>
          import('./../device/list/device-list.module').then(
            (m) => m.DeviceListModule
          ),
      },
      // {
      //   path: 'service-add',
      //   loadChildren: () =>
      //     import('./../service/add/add.module').then((m) => m.AddModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
