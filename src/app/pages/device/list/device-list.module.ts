import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list.component';
import { DeviceListRoutingModule } from './device-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { DeviceCardModule } from '../card/device-card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeviceAddModule } from '../add/device-add.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    DeviceListRoutingModule,
    MatToolbarModule,
    ContainerModule,
    DeviceCardModule,
    MatIconModule,
    DeviceCardModule,
    MatButtonModule,
    DeviceAddModule,
    MatCardModule,
  ],
})
export class DeviceListModule {}
