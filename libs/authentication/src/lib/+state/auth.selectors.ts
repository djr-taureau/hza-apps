import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.interfaces';
import { LoadDataStatus } from '@hza/shared/utils';

const authState = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(authState, state => state.currentUser);
