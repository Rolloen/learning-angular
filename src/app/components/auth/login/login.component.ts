import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { UserLoginModel } from 'src/app/core/models/user.model';
import { UserLoginActions } from 'src/app/core/store/actions/auth.actions';
import emailFormatValidator from 'src/app/core/validators/emailValidator/email.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, TranslateModule, RouterModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {

  store = inject(Store);

  emailFormControl = new FormControl('', [
    Validators.required,
    emailFormatValidator()
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  loginFormGroup = new FormGroup({
    'emailFormControl': this.emailFormControl,
    'passwordFormControl': this.passwordFormControl
  })

  login() {
    if(this.loginFormGroup.invalid) {
      return;
    }

    let loginUser : UserLoginModel= {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }

    this.store.dispatch(UserLoginActions.loginUser({ props: loginUser }));
  }
}
