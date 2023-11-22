import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserLoginModel, UserModel, UserRegistrationModel } from "../../models/user.model";


export const UserRegisterActions = createActionGroup({
  source: 'Auth',
  events : {
    registerUser : props<{props : UserRegistrationModel}>(),
    registerSuccess: emptyProps(),
    registerFailed: emptyProps(),
  }
})

export const UserLoginActions = createActionGroup({
  source: 'Auth',
  events: {
    loginUser: props<{ props: UserLoginModel }>(),
    loginSuccess: props<{ props: UserModel }>(),
  }
})


