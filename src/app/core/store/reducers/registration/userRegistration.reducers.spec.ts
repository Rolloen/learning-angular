import { registerSuccess } from '../../actions/userRegistration.actions';
import * as fromReducer from './userRegistration.reducers';


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

  describe('userRegistrationSuccess action', () => {
    it('should update state with isRegistered to true in immutable way', () => {
      //GIVEN
      const { initialState } = fromReducer;
      const newState: fromReducer.registrationState =  {
        isRegistered: true,
        emailExistsErr: false
      }
      //WHEN
      const action = registerSuccess();
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
