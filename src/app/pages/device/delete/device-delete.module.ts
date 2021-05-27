import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDeleteComponent } from './device-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DeviceDeleteComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [DeviceDeleteComponent],
})
export class DeviceDeleteModule {
  constructor() {}
}
