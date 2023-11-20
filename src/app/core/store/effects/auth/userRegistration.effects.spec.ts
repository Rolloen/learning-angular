import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { validRegistrationUserMock } from 'src/app/shared/models/mock/usersModel.mock';
import AuthServiceMock from 'src/app/shared/tests/services/authService.mock.service';
import { UserRegisterActions } from '../../actions/auth.actions';
import { registerNewUser } from './userRegistration.effects';

describe('', () => {
  let authServicemock : AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        AuthServiceMock
      ]
    });

    authServicemock = TestBed.inject(AuthService);
  })

  describe('Testing RegisterUserEffect', () => {
    it('Should call registerUser from AuthService when registerUser Action is called', (done) => {
      //GIVEN
      const mockProps  = validRegistrationUserMock;
      //WHEN
      const actionMock$ = of(UserRegisterActions.registerUser({ props: mockProps }));
      spyOn(authServicemock, 'registerUser').and.callFake(() => of(true));
      // THEN
      registerNewUser(actionMock$, authServicemock).subscribe(() => {
        expect(authServicemock.registerUser).toHaveBeenCalledTimes(1);
        done();
      });
    })
    it('should call registerSuccess() Action when given a valid user when registerUser Action is called', (done) => {
      //GIVEN
      const mockProps = validRegistrationUserMock;
      //WHEN
      const actionMock$ = of(UserRegisterActions.registerUser({ props: mockProps }));
      spyOn(authServicemock, 'registerUser').and.callFake(() => of(true));
      // THEN
      registerNewUser(actionMock$, authServicemock).subscribe((action) => {
        expect(action).toEqual(
          UserRegisterActions.registerSuccess()
        )
        done();
      });
    })
  })
})

