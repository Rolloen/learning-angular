import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import emailFormatValidator from '../shared/validators/emailValidator/email.validator';
import { passwordConfirmValidator, passwordFormatValidator } from '../shared/validators/passwordValidator/password.validator';

const REGISTRATION_KEYS = {
  userNameCtrl: 'usernameCtrl',
  emailCtrl: 'emailCtrl',
  passwordCtrl: 'passwordCtrl',
  confirmPasswordCtrl: 'confirmPasswordCtrl',
} as const

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  usernameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  emailCtrl = new FormControl('', [
    Validators.required,
    emailFormatValidator()
  ]);
  passwordCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    passwordFormatValidator()
  ]);
  confirmPasswordCtrl = new FormControl('');
  registerForm = new FormGroup({
    [REGISTRATION_KEYS.userNameCtrl]: this.usernameCtrl,
    [REGISTRATION_KEYS.emailCtrl]: this.emailCtrl,
    [REGISTRATION_KEYS.passwordCtrl]: this.passwordCtrl,
    [REGISTRATION_KEYS.confirmPasswordCtrl]: this.confirmPasswordCtrl
  }, {
    validators: [
      passwordConfirmValidator(REGISTRATION_KEYS.passwordCtrl, REGISTRATION_KEYS.confirmPasswordCtrl)
    ]
  });
}





