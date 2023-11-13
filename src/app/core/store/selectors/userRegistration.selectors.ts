import { createSelector } from '@ngrx/store';
import { AppState } from '../store.config';
import { registrationState } from '../reducers/registration/userRegistration.reducers';

export const selectFeature = (state: AppState) => state.registration;

export const selectRegistrationEmailErr = createSelector(
  selectFeature,
  (state: registrationState) => state.emailExistsErr
);
export const selectRegistratedUser = createSelector(
  selectFeature,
  (state: registrationState) => state.createdUser
);
