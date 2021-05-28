import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/service/fb-base.service';
import { Device } from 'src/app/shared/models/device.model';
import { DeviceAddComponent } from '../add/device-add.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  title = 'Deviceok';
  list: Observable<Device[]> | null = null;
  today = new Date();

  constructor(
    private service: FbBaseService<Device>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('devices');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeviceAddComponent, {});
  }
}
