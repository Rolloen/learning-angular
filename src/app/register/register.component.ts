import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import emailFormatValidator from '../shared/validators/emailValidator/email.validator';
import { passwordConfirmValidator, passwordFormatValidator } from '../shared/validators/passwordValidator/password.validator';
import { AUTH_CONST } from '../shared/constants/auth.const';

const REGISTRATION_KEYS = {
  userNameCtrl: 'usernameCtrl',
  emailCtrl: 'emailCtrl',
  passwordCtrl: 'passwordCtrl',
  confirmPasswordCtrl: 'confirmPasswordCtrl',
} as const;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, TranslateModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  usernameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(AUTH_CONST.USERNAME_MINLENGTH)
  ]);
  emailCtrl = new FormControl('', [
    Validators.required,
    emailFormatValidator()
  ]);
  passwordCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(AUTH_CONST.PASSWORD_MINLENGTH),
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

  constructor() {


  }

  registerUser() : void {
    if(this.registerForm.invalid) {
      return;
    }
  }
}





