import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserLoginModel, UserRegistrationModel } from "../../models/user.model";


export const UserRegisterActions = createActionGroup({
  source: 'User',
  events : {
    registerUser : props<{props : UserRegistrationModel}>(),
    registerSuccess: emptyProps(),
    registerFailed: emptyProps(),
  }
})



export const UserLoginActions = createActionGroup({
  source: 'User',
  events: {
    loginUser: props<{ props: UserLoginModel }>(),
  }
})


export const {
  registerUser,
  registerSuccess,
  registerFailed
} = UserRegisterActions

export const {
  loginUser,
} = UserLoginActions
