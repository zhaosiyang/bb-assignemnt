import {createSelector} from '@ngrx/store';
import {RootState} from '../reducers/root-reducer';

export const selectAccountState = (rootState: RootState) => rootState.accountState;
export const selectToAccounts = createSelector(selectAccountState, state => state.toAccounts);
export const selectFromAccount = createSelector(selectAccountState, state => state.fromAccount);
