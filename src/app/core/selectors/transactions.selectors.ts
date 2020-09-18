import {createSelector} from '@ngrx/store';
import {RootState} from '../reducers/root-reducer';

export const selectTransactionState = (rootState: RootState) => rootState.transactionState;
export const selectTransactions = createSelector(selectTransactionState, state => state.transactions);
