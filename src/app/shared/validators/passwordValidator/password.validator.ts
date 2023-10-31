import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { PWD_REGEX } from "../../constants/auth.const";

export function passwordConfirmValidator(pwdKey: string, pwdConfirmKey: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordValue = control.get(pwdKey)?.value;
    const confirmPasswordValue = control.get(pwdConfirmKey)?.value;
    return passwordValue === confirmPasswordValue ? null : { notSamePasswordError: true};
  };
}
export function passwordFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValidPassword = PWD_REGEX.test(control.value);
    return isValidPassword ? null : { passwordFormatInvalid: { value: control.value } };
  };
}
