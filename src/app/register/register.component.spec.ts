import { ComponentFixture, TestBed } from '@angular/core/testing';

import  RegisterComponent  from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterComponent]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('have all controllers', () => {
    it('should create form group RegisterForm', () => {
      expect(component.registerForm).toBeTruthy();
    });

    it('should have a form controller usernameCtrl', () => {
      expect(component.usernameCtrl).toBeTruthy();
    });
    it('should have a form controller emailCtrl', () => {
      expect(component.emailCtrl).toBeTruthy();
    });
    it('should have a form controller passwordCtrl', () => {
      expect(component.passwordCtrl).toBeTruthy();
    });
    it('should have a form controller confirmPasswordCtrl', () => {
      expect(component.confirmPasswordCtrl).toBeTruthy();
    });

    it('should registerForm contains usernameCtrl', () => {
      expect(component.registerForm.get('usernameCtrl')).toBeTruthy();
    });
    it('should registerForm contains emailCtrl', () => {
      expect(component.registerForm.get('emailCtrl')).toBeTruthy();
    });
    it('should registerForm contains passwordCtrl', () => {
      expect(component.registerForm.get('passwordCtrl')).toBeTruthy();
    });
    it('should registerForm contains confirmPasswordCtrl', () => {
      expect(component.registerForm.get('confirmPasswordCtrl')).toBeTruthy();
    });
  });

  describe('form validation : username', () => {
    it('should return Error "required" if form control value is empty', () => {
      expect(component.usernameCtrl.hasError('required')).toBeTrue();
    });
    it('should return Error "minlength" if form control value contains < 3 characters', () => {
      //GIVEN :
      const username = 'RO';
      //WHEN
      component.usernameCtrl.patchValue(username);
      //THEN
      expect(component.usernameCtrl.hasError('minlength')).toBeTrue();
    });
    it('should NOT return Error "minlength" if form control value contains > 3 characters', () => {
      //GIVEN :
      const username = 'ROLLLL';
      //WHEN
      component.usernameCtrl.patchValue(username);
      //THEN
      expect(component.usernameCtrl.hasError('minlength')).toBeFalse();
    });
  })

  describe('form validation : email', () => {
    it('should return Error "required" if form control value is empty', () => {
      expect(component.emailCtrl.hasError('required')).toBeTrue();
    });
    it('should return Error "emailFormatInvalid" if form control value is test&test.com', () => {
      //GIVEN :
      const email = 'test&test.com';
      //WHEN
      component.emailCtrl.patchValue(email);
      //THEN
      expect(component.emailCtrl.hasError('emailFormatInvalid')).toBeTrue();
    });
  });

  describe('form validation : password', () => {
    it('should return Error "required" if password form control value is empty', () => {
      expect(component.passwordCtrl.hasError('required')).toBeTrue();
    });
    it('should return Error "minlength" if password form control value is < 8 characters', () => {
      //GIVEN :
      const password = 'passwo';
      //WHEN:
      component.passwordCtrl.patchValue(password);
      //THEN
      expect(component.passwordCtrl.hasError('minlength')).toBeTrue();
    });
    it('should return Error "passwordFormatInvalid" if password form control value does not respect the format (at leat 1 uppercase, 1 lowercase, 1 special char and 1 number)', () => {
      //GIVEN :
      const password = 'password123';
      //WHEN:
      component.passwordCtrl.patchValue(password);
      //THEN
      expect(component.passwordCtrl.hasError('passwordFormatInvalid')).toBeTrue();
    });
    it('should NOT return Error "passwordFormatInvalid" if password form control value  respect the format (at leat 1 uppercase, 1 lowercase, 1 special char and 1 number)', () => {
      //GIVEN :
      const password = 'p@ssWord123';
      //WHEN:
      component.passwordCtrl.patchValue(password);
      //THEN
      expect(component.passwordCtrl.hasError('passwordFormatInvalid')).toBeFalse();
    });
    it('should return Error "notSamePasswordError" when the password and confirmPassword are not the same', () => {
      //GIVEN :
      const password = 'test&test.com';
      const password2 = 'test&test.com111';
      //WHEN
      component.passwordCtrl.patchValue(password);
      component.confirmPasswordCtrl.patchValue(password2);
      //THEN
      expect(component.registerForm.hasError('notSamePasswordError')).toBeTrue();
    });
  })

});
