import { UserLoginModel, UserModel } from 'src/app/core/models/user.model';
import { UserLoginActions, UserRegisterActions } from '../../actions/auth.actions';
import * as fromReducer from './userAuth.reducers';


describe('Auth reducers test', () => {
  describe('user register reducers', () => {
    describe('unknown action', () => {
      it('should return the default state', () => {
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.userAuthReducers(initialState, action);

        expect(state).toBe(initialState);
      });
    });

    describe('userRegistrationSuccess action', () => {
      it('should update state with isRegistered to true in immutable way', () => {
        //GIVEN
        const { initialState } = fromReducer;
        //WHEN
        const action = UserRegisterActions.registerSuccess();
        const state = fromReducer.userAuthReducers(initialState, action);
        //THEN
        expect(state.isRegistered).toBe(true);
      })
    })
  })
  describe('User login reducers', () => {
    it('Should not update state when "Unknown" action is dispatched', () => {
      //GIVEN
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown'
      }
      //WHEN
      const afterState = fromReducer.userAuthReducers(initialState, action);
      //THEN
      expect(afterState).toBe(initialState);
    });
    it('Should update state with isLoading to true when action "loginUser" is dispatched', () => {
      //GIVEN
      const { initialState } = fromReducer;
      const userInfos  : UserLoginModel = { email: 'test@test.com', password:'Test@1234'};
      const action = UserLoginActions.loginUser({ props: userInfos })
      //WHEN
      const afterState = fromReducer.userAuthReducers(initialState, action);
      //THEN
      expect(afterState.isLoading).toBe(true);
    });
    it('Should update state with isLoading : false and isLoggedIn : true when action "loginSuccess" is dispatched', () => {
      //GIVEN
      const { initialState } = fromReducer;
      const userInfos : UserModel = { email: 'test@test.com', username: 'Testing', creationDate : new Date()};
      const action = UserLoginActions.loginSuccess({props: userInfos});
      const expectState : fromReducer.authState = {...initialState, isLoading: false, isLoggedIn : true};
      //WHEN
      const afterState = fromReducer.userAuthReducers(initialState, action);
      //THEN
      expect(afterState).toEqual(expectState);
    });
  })



});
