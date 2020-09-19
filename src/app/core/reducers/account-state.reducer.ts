import {createDefaultLoadableReducer, Loadable} from '../../utils/loadable';
import {ActionReducer, combineReducers, createReducer, on} from '@ngrx/store';
import {getAccountsLoadAction, getAccountsLoadErrorAction, getAccountsLoadSuccessAction} from '../actions/account.actions';
import {Account} from '../../models/account';
import {postTransactionsLoadSuccessAction} from '../actions/transaction.actions';

export interface AccountState {
  fromAccount: Account | null;
  toAccounts: Account[];
  getAccountsLoadable: Loadable;
}

export const accountStateReducer: ActionReducer<AccountState> = combineReducers<AccountState>({
  fromAccount: createReducer(null,
    on(getAccountsLoadSuccessAction, (state, action) => action.fromAccount),
    on(postTransactionsLoadSuccessAction, (state: Account, action) => ({...state, balance: state.balance as number - action.amount}))
  ),
  toAccounts: createReducer([],
    on(getAccountsLoadSuccessAction, (state, action) => action.toAccounts),
  ),
  getAccountsLoadable: createDefaultLoadableReducer({
    loadAction: getAccountsLoadAction,
    successAction: getAccountsLoadSuccessAction,
    errorAction: getAccountsLoadErrorAction,
  })
});
