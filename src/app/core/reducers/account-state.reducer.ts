import {createDefaultLoadableReducer, Loadable} from '../../utils/loadable';
import {ActionReducer, combineReducers, createReducer, on} from '@ngrx/store';
import {getAccountsLoadAction, getAccountsLoadErrorAction, getAccountsLoadSuccessAction} from '../actions/account.actions';
import {Account} from '../../models/account';

export interface AccountState {
  accounts: Account[];
  getAccountsLoadable: Loadable;
}

export const accountStateReducer: ActionReducer<AccountState> = combineReducers<AccountState>({
  accounts: createReducer([],
    on(getAccountsLoadSuccessAction, (state, action) => action.accounts),
  ),
  getAccountsLoadable: createDefaultLoadableReducer({
    loadAction: getAccountsLoadAction,
    successAction: getAccountsLoadSuccessAction,
    errorAction: getAccountsLoadErrorAction,
  })
});
