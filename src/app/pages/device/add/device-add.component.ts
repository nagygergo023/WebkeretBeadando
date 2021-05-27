import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/service/fb-base.service';
import { Device } from 'src/app/shared/models/device.model';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss'],
})
export class DeviceAddComponent implements OnInit {
  form: FormGroup;
  editMode: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DeviceAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private service: FbBaseService<Device>
  ) {
    this.form = this.fb.group({
      id: [''],
      deviceName: [''],
      definition: ['', Validators.required],
      manufacturer: [''],
      patient: [''],
      owner: [''],
      location: [''],
      url: [''],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.editMode = true;
      this.form.patchValue({
        id: this.data.deviceData.id,
        deviceName: this.data.deviceData.deviceName,
        definition: this.data.deviceData.definition,
        manufacturer: this.data.deviceData.manufacturer,
        patient: this.data.deviceData.patient,
        owner: this.data.deviceData.owner,
        location: this.data.deviceData.location,
        url: this.data.deviceData.url,
      });
    }
  }

  close(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }
  addDevice() {
    const device: Device = {
      id: this.form.value.id,
      deviceName: this.form.value.deviceName,
      definition: this.form.value.definition,
      manufacturer: this.form.value.manufacturer,
      patient: this.form.value.patient,
      owner: this.form.value.owner,
      location: this.form.value.location,
      url: this.form.value.url,
    };
    this.service.add('devices', device);
  }

  updateDevice() {
    const device: Device = {
      id: this.form.value.id,
      deviceName: this.form.value.deviceName,
      definition: this.form.value.definition,
      manufacturer: this.form.value.manufacturer,
      patient: this.form.value.patient,
      owner: this.form.value.owner,
      location: this.form.value.location,
      url: this.form.value.url,
    };
    this.service.update('devices', this.form.value.id, device);
  }

  onSubmit() {
    if (this.editMode) {
      this.updateDevice();
    } else {
      this.addDevice();
    }
  }
}
