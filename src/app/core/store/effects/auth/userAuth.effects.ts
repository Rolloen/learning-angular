import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { HttpCustomError } from "src/app/core/models/httpErrors.model";
import { UserModel } from "src/app/core/models/user.model";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { UserLoginActions, UserRegisterActions } from "../../actions/auth.actions";

export const registerNewUser = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ) => {
    return actions$.pipe(
      ofType(UserRegisterActions.registerUser),
      exhaustMap((action) =>{
        return authService.registerUser(action.props).pipe(
          map((res) => {
            console.log(res);

            return UserRegisterActions.registerSuccess();
          }),
          catchError((err : HttpCustomError) => {
            console.error(err);
            return of(UserRegisterActions.registerFailed);
          })
        )
      })
    )
  },
  {functional: true}
);

export const loginUser = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ) => {
    return actions$.pipe(
      ofType(UserLoginActions.loginUser),
      exhaustMap((action) =>{
        return authService.loginUser(action.props).pipe(
          map((res) => {
            console.log(res);
            return UserLoginActions.loginSuccess({props: res as UserModel});
          }),
          catchError((err : HttpCustomError) => {
            console.error(err);
            return of(UserRegisterActions.registerFailed);
          })
        )
      })
    )
  },
  {functional: true}
);
