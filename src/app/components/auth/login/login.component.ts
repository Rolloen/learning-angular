import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import emailFormatValidator from 'src/app/core/validators/emailValidator/email.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, TranslateModule, RouterModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {

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
  }
}
