import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getDeviceForm } from 'src/app/shared/forms/device.form';
import { Device } from 'src/app/shared/models/device.model';
import { DeviceCardComponent } from '../card/device-card.component';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss'],
})
export class DeviceEditComponent implements OnInit {
  form: FormGroup | null = null;
  //STATES: any = DEVICE_STATE;
  loaded: boolean = false;
  errorMessage: string | undefined;
  DeviceObj?: Device;
  constructor(public dialogRef: MatDialogRef<DeviceCardComponent>) {}

  ngOnInit(): void {}

  initForm(): void {
    this.form = getDeviceForm();
    this.form?.get('factory')?.setValidators(Validators.required);

    const idFormArray = this.form.get('deviceName') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.givenByBuilder.setValue(
      'nemtom'
    );
  }

  log() {
    console.log(this.form?.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
