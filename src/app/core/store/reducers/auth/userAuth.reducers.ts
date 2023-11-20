import { createReducer, on } from '@ngrx/store';
import { UserRegisterActions, UserLoginActions } from '../../actions/auth.actions';

export interface authState {
  // createdUser? : UserModel,
  isRegistered : boolean,
  isLoading : boolean,
  emailExistsErr: boolean,
  isLoggedIn : boolean
}

export const initialState: authState = {
  isRegistered: false,
  isLoggedIn: false,
  isLoading: false,
  emailExistsErr: false
}

export const userRegistrationReducers = createReducer(
  initialState,
  on(UserRegisterActions.registerSuccess, (state) => ({ ...state, isRegistered : true})),
  on(UserRegisterActions.registerFailed, (state) => ({ ...state, isRegistered : false})),
);

export const userLoginReducers = createReducer(
  initialState,
  on(UserLoginActions.loginUser, (state) => ({ ...state, isLoading: true }))
)
// export const userRegistrationErrMailReducers = createReducer(
//   initialState,
//   on(UserRegisterActions.registerUser, (state, action ) => ({...state,  createdUser : action.props}))
// );
