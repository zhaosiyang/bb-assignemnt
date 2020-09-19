import {createAction, props} from '@ngrx/store';
import {Transaction} from '../../models/transaction';
import {HttpErrorResponse} from '@angular/common/http';

export const getTransactionsLoadAction = createAction('[Transactions Page] Get Transactions Load');

export const getTransactionsLoadSuccessAction = createAction('[Transactions Page] Get Transactions Load Success',
  props<{transactions: Transaction[]}>());

export const getTransactionsLoadErrorAction = createAction('[Transactions Page] Get Transactions Load Error',
  props<{error: HttpErrorResponse}>());


export const postTransactionsLoadAction = createAction('[Transactions Page] Post Transactions Load',
  props<{fromAccountId: string; toAccountId: string; amount: number}>());

export const postTransactionsLoadSuccessAction = createAction('[Transactions Page] Post Transactions Load Success',
  props<{transaction: Transaction, amount: number}>());

export const postTransactionsLoadErrorAction = createAction('[Transactions Page] Post Transactions Load Error',
  props<{error: HttpErrorResponse}>());
