import { UserLoginModel } from 'src/app/core/models/user.model';
import { registerSuccess, loginUser } from '../../actions/auth.actions';
import * as fromReducer from './userAuth.reducers';


describe('Auth reducers test', () => {


  describe('user register reducers', () => {
    describe('unknown action', () => {
      it('should return the default state', () => {
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.userRegistrationReducers(initialState, action);

        expect(state).toBe(initialState);
      });
    });

    describe('userRegistrationSuccess action', () => {
      it('should update state with isRegistered to true in immutable way', () => {
        //GIVEN
        const { initialState } = fromReducer;
        //WHEN
        const action = registerSuccess();
        const state = fromReducer.userRegistrationReducers(initialState, action);

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
      const afterState = fromReducer.userLoginReducers(initialState, action);
      //THEN
      expect(afterState).toBe(initialState);
    });
    it('Should update state with isLoading to true when action "loginUser" is dispatched', () => {
      //GIVEN
      const { initialState } = fromReducer;
      const userInfos  : UserLoginModel = { email: 'test@test.com', password:'Test@1234'};
      const action = loginUser({ props: userInfos })
      //WHEN
      const afterState = fromReducer.userLoginReducers(initialState, action);

      //THEN
      expect(afterState.isLoading).toBe(true);
    });
  })



});
