import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/service/fb-base.service';
import { Device } from 'src/app/shared/models/device.model';
import { DeviceAddComponent } from '../add/device-add.component';
import { DeviceEditComponent } from '../edit/device-edit.component';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
})
export class DeviceCardComponent implements OnInit {
  @Input() device: Device = {} as any;
  @Input() hasAction = true;
  @Output() getDevice = new EventEmitter<Device>();

  constructor(
    private service: FbBaseService<Device>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  deleteDevice(deviceId: string): void {
    this.service.delete('devices', deviceId);
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(DeviceAddComponent, {
      data: { deviceData: this.device },
      backdropClass: 'backdropBackground',
      panelClass: 'editDialogBackground',
    });
  }

  // updateDevice(deviceId: string): void {
  //   this.service.update('devices', deviceId);
  // }
}
