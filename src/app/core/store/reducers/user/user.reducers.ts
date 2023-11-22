import { createReducer, on } from "@ngrx/store";
import { UserModel } from "src/app/core/models/user.model"
import { UserDataActions } from "../../actions/user.actions";


export interface userState {
  userData? : UserModel,
  lastUpdated ?: Date
}

export const initialState : userState = {};


export const userDataReducers = createReducer(
  initialState,
  on(UserDataActions.updateUserData, (state, action) => ({ ...state, userData : action.props, lastUpdated : new Date() })),
);
