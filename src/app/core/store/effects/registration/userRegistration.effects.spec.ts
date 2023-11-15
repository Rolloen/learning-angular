import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import AuthServiceMock from 'src/app/shared/tests/services/authService.mock.service';
import { UserRegisterActions } from '../../actions/userRegistration.actions';
import { registerNewUser } from './userRegistration.effects';
import { AuthService } from 'src/app/core/services/auth/auth.service';

describe('', () => {
  let authServicemock : AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        AuthServiceMock
      ]
    })

    authServicemock = TestBed.inject(AuthService);
  })

  describe('Testing RegisterUserEffect', () => {
    it('Should call registerUser service when registerUser Action is called', () => {
      const checkAuthserviceCalled = spyOn(authServicemock, 'registerUser');
      const actionMock$ = of(UserRegisterActions.registerUser);
      console.log(authServicemock.registerUser);

      registerNewUser(actionMock$, authServicemock).subscribe(() => {
        expect(authServicemock.registerUser).toHaveBeenCalledTimes(1);
      });
    })
    // it('should call registerSuccess() Action when given ', () => {

    // })
  })
})

