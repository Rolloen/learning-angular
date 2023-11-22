import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserLoginModel, UserModel, UserRegistrationModel } from '../../models/user.model';
import { HttpCustomError } from '../../models/httpErrors.model';
import { environment } from 'src/environments/environment';

const API_URLS = {
  register: environment.apiUrl + 'users/register',
  login: environment.apiUrl + 'users/login',

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  registerUser(userToRegister: UserRegistrationModel) {
    return this.http.post<boolean | HttpCustomError>(API_URLS.register, userToRegister).pipe(
      map((res)=> res),
      catchError((err: HttpCustomError) => throwError(() => err))
    )
  }
  loginUser(userToLogin: UserLoginModel) {
    return this.http.post<UserModel | HttpCustomError>(API_URLS.login, userToLogin).pipe(
      map((res)=> res),
      catchError((err: HttpCustomError) => throwError(() => err))
    )
  }
}
