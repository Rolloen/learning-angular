import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { AuthService } from "src/app/core/services/auth/auth.service";
import { HttpCustomError } from "src/app/core/models/httpErrors.model";
import { UserRegisterActions } from "../../actions/userRegistration.actions";


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
