import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import LoginComponent from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent, RouterTestingModule, TranslateModule.forRoot(), BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('testing login form',() => {
    it('Should have the emailFormControl', () => {
      expect(component.emailFormControl).toBeTruthy();
    });
    it('Should have the passwordFormControl', () => {
      expect(component.passwordFormControl).toBeTruthy();
    });
    it('Should loginFormGroup have the passwordFormControl', () => {
      expect(component.loginFormGroup.controls["emailFormControl"]).toBeTruthy();
    });
    it('Should loginFormGroup have the passwordFormControl', () => {
      expect(component.loginFormGroup.controls["passwordFormControl"]).toBeTruthy();
    });

    it('Should return error "required" if emailFormControl value is empty', () => {
      //GIVEN
      let email = '';
      //WHEN
      component.emailFormControl.patchValue(email);
      //THEN
      expect(component.emailFormControl.hasError('required')).toBeTruthy();
    });
    it('Should return error "emailFormatInvalid" if emailFormControl value is not a valid mail', () => {
      //GIVEN
      let email = '';
      //WHEN
      component.emailFormControl.patchValue(email);
      //THEN
      expect(component.emailFormControl.hasError('emailFormatInvalid')).toBeTruthy();
    });

    it('Should return error "required" if passwordFormControl value is empty', () => {
      //GIVEN
      let pwd = '';
      //WHEN
      component.passwordFormControl.patchValue(pwd);
      //THEN
      expect(component.passwordFormControl.hasError('required')).toBeTruthy();
    });
  })
});
