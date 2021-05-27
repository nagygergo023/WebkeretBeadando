import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [DeviceComponent],
  imports: [CommonModule, MatCardModule, MatSliderModule],
  exports: [DeviceComponent],
})
export class DeviceModule {}
