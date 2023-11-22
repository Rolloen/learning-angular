import { createActionGroup, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";


export const UserDataActions = createActionGroup({
  source: 'User',
  events: {
    updateUserData: props<{ props: UserModel}>()
  }
})
