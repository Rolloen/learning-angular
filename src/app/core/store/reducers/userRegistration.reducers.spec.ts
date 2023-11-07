import * as fromReducer from './userRegistration.reducers';
import { registerUser } from '../actions/userRegistration.actions';
import { UserModel } from '../../models/user.model';

describe('Register user reducer', () => {
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

  describe('userRegistration action', () => {
    it('should update state with new registratedUser in immutable way', () => {
      //GIVEN
      const newUser:UserModel = {
        email : 'test@test.com',
        username: 'TestApp'
      }
      const { initialState } = fromReducer;
      const newState: fromReducer.registrationState =  {
        createdUser: newUser,
        emailExistsErr: false
      }
      //WHEN
      const action = registerUser({props: newUser})
      const state = fromReducer.userRegistrationReducers(initialState, action);

      //THEN
      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    })
  })


  // describe('retrievedBookList action', () => {
  //   it('should retrieve all books and update the state in an immutable way', () => {
  //     const { initialState } = fromReducer;
  //     const newState: Array<Book> = [
  //       {
  //         id: 'firstId',
  //         volumeInfo: {
  //           title: 'First Title',
  //           authors: ['First Author'],
  //         },
  //       },
  //     ];
  //     const action = retrievedBookList({ Book: newState });
  //     const state = fromReducer.booksReducer(initialState, action);

  //     expect(state).toEqual(newState);
  //     expect(state).not.toBe(initialState);
  //   });
  // });
});
