import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default function emailFormatValidator(): ValidatorFn {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const emailFormatValid = regex.test(control.value);
    return emailFormatValid ? null : { emailFormatInvalid: { value: control.value } };
  };
}
