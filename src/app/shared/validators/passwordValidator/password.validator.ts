import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordConfirmValidator(pwdKey: string, pwdConfirmKey: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordValue = control.get(pwdKey)?.value;
    const confirmPasswordValue = control.get(pwdConfirmKey)?.value;
    return passwordValue === confirmPasswordValue ? null : { notSamePasswordError: { value: control.value } };
  };
}
export function passwordFormatValidator(): ValidatorFn {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const isValidPassword = regex.test(control.value);
    return isValidPassword ? null : { passwordFormatInvalid: { value: control.value } };
  };
}
