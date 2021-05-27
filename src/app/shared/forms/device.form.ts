import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getdeviceName } from './device-deviceName.form';

export function getDeviceForm(): FormGroup {
  return new FormGroup({
    id: new FormControl(),
    definition: new FormControl(),
    manufacturer: new FormControl(),
    deviceName: new FormArray([getdeviceName('main'), getdeviceName('sec')]),
    patient: new FormControl(),
    owner: new FormControl(),
    location: new FormControl(),
    url: new FormControl(),
  });
}
