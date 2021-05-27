import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function getdeviceName(givenByBuilder: string): FormGroup {
  return new FormGroup({
    text: new FormControl(),
    factory: new FormControl(),
    givenByBuilder: new FormControl(givenByBuilder),
  });
}
