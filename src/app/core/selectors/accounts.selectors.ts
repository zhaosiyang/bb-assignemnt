import {createSelector} from '@ngrx/store';
import {RootState} from '../reducers/root-reducer';

export const selectAccountState = (rootState: RootState) => rootState.accountState;
export const selectAccounts = createSelector(selectAccountState, state => state.accounts);
