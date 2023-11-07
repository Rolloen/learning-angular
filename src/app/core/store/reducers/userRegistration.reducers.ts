import { createReducer, on } from '@ngrx/store';
import { UserRegisterActions } from '../actions/userRegistration.actions';
import { UserModel } from '../../models/user.model';

export interface registrationState {
  createdUser? : UserModel,
  emailExistsErr: boolean
}

export const initialState: registrationState = {
  emailExistsErr: false
}

export const userRegistrationReducers = createReducer(
  initialState,
  on(UserRegisterActions.registerUser, (state, action ) => ({...state,  createdUser : action.props}))
);
// export const userRegistrationErrMailReducers = createReducer(
//   initialState,
//   on(UserRegisterActions.registerUser, (state, action ) => ({...state,  createdUser : action.props}))
// );
