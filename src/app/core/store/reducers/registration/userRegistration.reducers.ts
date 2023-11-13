import { createReducer, on } from '@ngrx/store';
import { UserRegisterActions } from '../../actions/userRegistration.actions';

export interface registrationState {
  // createdUser? : UserModel,
  isRegistered : boolean
  emailExistsErr: boolean
}

export const initialState: registrationState = {
  isRegistered: false,
  emailExistsErr: false
}

export const userRegistrationReducers = createReducer(
  initialState,
  on(UserRegisterActions.registerSuccess, (state) => ({ ...state, isRegistered : true})),
  on(UserRegisterActions.registerFailed, (state) => ({ ...state, isRegistered : false})),

);
// export const userRegistrationErrMailReducers = createReducer(
//   initialState,
//   on(UserRegisterActions.registerUser, (state, action ) => ({...state,  createdUser : action.props}))
// );
