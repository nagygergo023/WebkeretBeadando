import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceListComponent,
    data: { title: 'Device - Webkert' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceListRoutingModule {}
