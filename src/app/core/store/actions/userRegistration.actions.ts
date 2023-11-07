import { createActionGroup, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";


export const UserRegisterActions = createActionGroup({
  source: 'User',
  events : {
    registerUser : props<{props : UserModel}>()
  }
})


export const {
  registerUser
} = UserRegisterActions
