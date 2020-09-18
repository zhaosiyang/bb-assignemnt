import {ActionReducer, combineReducers, createReducer, on} from '@ngrx/store';
import {Transaction} from '../../models/transaction';
import {createDefaultLoadableReducer, Loadable} from '../../utils/loadable';
import {
  getTransactionsLoadAction,
  getTransactionsLoadErrorAction,
  getTransactionsLoadSuccessAction,
  postTransactionsLoadAction,
  postTransactionsLoadErrorAction,
  postTransactionsLoadSuccessAction
} from '../actions/transaction.actions';

export interface TransactionState {
  transactions: Transaction[];
  getTransactionsLoadable: Loadable;
  postTransactionsLoadable: Loadable;
}

export const transactionsStateReducer: ActionReducer<TransactionState> = combineReducers<TransactionState>({
  transactions: createReducer([],
    on(getTransactionsLoadSuccessAction, (state, action) => action.transactions),
    on(postTransactionsLoadSuccessAction, (state, action) => ([action.transaction, ...state]))
  ),
  getTransactionsLoadable: createDefaultLoadableReducer({
    loadAction: getTransactionsLoadAction,
    successAction: getTransactionsLoadSuccessAction,
    errorAction: getTransactionsLoadErrorAction,
  }),
  postTransactionsLoadable: createDefaultLoadableReducer({
    loadAction: postTransactionsLoadAction,
    successAction: postTransactionsLoadSuccessAction,
    errorAction: postTransactionsLoadErrorAction,
  })
});
