import { UserModel } from 'src/app/core/models/user.model';
import { validUserDataMock } from 'src/app/shared/models/mock/usersModel.mock';
import { UserDataActions } from '../../actions/user.actions';
import * as fromReducer from './user.reducers';

describe('User reducers test',() => {
  it('Should do nothing given Unknown action dispatched', () => {
    //GIVEN
    const { initialState } = fromReducer;
    const unknownAction = {
      type : 'Unknown'
    }
    //WHEN
    const afterState = fromReducer.userDataReducers(initialState, unknownAction);
    //THEN
    expect(afterState).toEqual(initialState);
  });

  it('Should update state with new userData and new lastUpdated when updateUserData action is dispatched', () => {
    //GIVEN
    const { initialState } = fromReducer;
    const userData : UserModel = validUserDataMock;
    const action = UserDataActions.updateUserData({ props: userData })
    const expectedState: fromReducer.userState = { userData: userData , lastUpdated : new Date()}
    //WHEN
    const afterState = fromReducer.userDataReducers(initialState, action);
    //THEN
    expect(afterState).toEqual(expectedState);
  });
})
