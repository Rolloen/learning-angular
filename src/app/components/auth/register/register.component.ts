import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { AUTH_CONST } from '../../../core/constants/auth.const';
import { UserRegistrationModel } from '../../../core/models/user.model';
import { UserRegisterActions } from '../../../core/store/actions/auth.actions';
import emailFormatValidator from '../../../core/validators/emailValidator/email.validator';
import { passwordConfirmValidator, passwordFormatValidator } from '../../../core/validators/passwordValidator/password.validator';

const REGISTRATION_KEYS = {
  userNameCtrl: 'usernameCtrl',
  emailCtrl: 'emailCtrl',
  passwordCtrl: 'passwordCtrl',
  confirmPasswordCtrl: 'confirmPasswordCtrl',
} as const;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, TranslateModule, MatButtonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {

  store = inject(Store);

  userToRegister?: UserRegistrationModel;

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

  registerUser() : void {
    if(this.registerForm.invalid) {
      return;
    }

    this.userToRegister = {
      email : this.emailCtrl.value,
      username : this.usernameCtrl.value,
      password : this.passwordCtrl.value
    }

    this.store.dispatch(UserRegisterActions.registerUser({props:this.userToRegister}));
  }
}





