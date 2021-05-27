import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceCardComponent } from './device-card.component';
import { DeviceDeleteModule } from '../delete/device-delete.module';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DeviceCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    OnHoverModule,
    DeviceDeleteModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
  ],
  exports: [DeviceCardComponent],
})
export class DeviceCardModule {}
