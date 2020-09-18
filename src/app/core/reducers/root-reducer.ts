import {transactionsStateReducer, TransactionState} from './transaction-state.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AccountState, accountStateReducer} from './account-state.reducer';

export interface RootState {
  transactionState: TransactionState;
  accountState: AccountState;
  // ...
  // more states for more features
}

export const rootReducer: ActionReducerMap<RootState> = {
  transactionState: transactionsStateReducer,
  accountState: accountStateReducer,
  // ...
  // more reducer for more features
};
