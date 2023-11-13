import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserRegistrationModel } from "../../models/user.model";


export const UserRegisterActions = createActionGroup({
  source: 'User',
  events : {
    registerUser : props<{props : UserRegistrationModel}>(),
    registerSuccess: emptyProps(),
    registerFailed: emptyProps(),
  }
})


export const {
  registerUser,
  registerSuccess,
  registerFailed
} = UserRegisterActions
