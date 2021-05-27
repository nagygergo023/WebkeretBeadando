import { FormControl, FormGroup } from '@angular/forms';

export function getDefinitionForm(): FormGroup {
  return new FormGroup({
    text: new FormControl(),
  });
}
