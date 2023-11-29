import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { validLoginUserMock, validRegistrationUserMock, validUserDataMock } from 'src/app/shared/models/mock/usersModel.mock';
import AuthServiceMock from 'src/app/shared/tests/services/authService.mock.service';
import { UserLoginActions, UserRegisterActions } from '../../actions/auth.actions';
import { loginUser, registerNewUser, updateUserData } from './userAuth.effects';
import { UserDataActions } from '../../actions/user.actions';

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
  });

  describe('Testing RegisterUserEffect', () => {
    it('Should call registerUser from AuthService when registerUser Action is called', () => {
      //GIVEN
      const mockProps  = validRegistrationUserMock;
      //WHEN
      const actionMock$ = of(UserRegisterActions.registerUser({ props: mockProps }));
      spyOn(authServicemock, 'registerUser').and.callFake(() => of(true));
      // THEN
      registerNewUser(actionMock$, authServicemock).subscribe(() => {
        expect(authServicemock.registerUser).toHaveBeenCalledTimes(1);
      });
    });
    it('should call registerSuccess() Action when given a valid user when registerUser Action is called', () => {
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
      });
    });
  })

  describe('Testing LoginUser effect',() => {
    it('Should call loginuser from AuthService when loginUser Action is called', () => {
      //GIVEN
      const mockProps = validLoginUserMock;
      const mockUserData = validUserDataMock;
      //WHEN
      const actionMock$ = of(UserLoginActions.loginUser({ props: mockProps }));
      spyOn(authServicemock, 'loginUser').and.callFake(() => of(mockUserData));
      // THEN
      loginUser(actionMock$, authServicemock).subscribe(() => {
        expect(authServicemock.loginUser).toHaveBeenCalledWith(mockProps);
      });
    });

    it('should call loginSuccess() Action when given a registered user when loginUser Action is called', () => {
      //GIVEN
      const mockProps = validLoginUserMock;
      const mockUserData = validUserDataMock;
      //WHEN
      const actionMock$ = of(UserLoginActions.loginUser({ props: mockProps }));
      spyOn(authServicemock, 'loginUser').and.callFake(() => of(mockUserData));
      // THEN
      loginUser(actionMock$, authServicemock).subscribe((action) => {
        expect(action).toEqual(
          UserLoginActions.loginSuccess({ props: mockUserData })
        )
      });
    });
  })

  describe('Testing updateUserData effect',() => {
    it('Should call updateUserData action when loginSuccess Action is called', () => {
      //GIVEN
      const mockProps = validUserDataMock;
      //WHEN
      const actionMock$ = of(UserLoginActions.loginSuccess({ props: mockProps }));
      // THEN
      updateUserData(actionMock$).subscribe((action) => {
        expect(action).toEqual(
          UserDataActions.updateUserData({ props: mockProps })
        )
      });
    });
  })
})

