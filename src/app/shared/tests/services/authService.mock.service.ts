import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpCustomError } from "src/app/core/models/httpErrors.model";
import { UserRegistrationModel } from "src/app/core/models/user.model";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Injectable()
export default class AuthServiceMock extends AuthService {
  override registerUser(userToRegister: UserRegistrationModel){
    return of(false);
  }

}

