import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {Account} from '../../models/account';

export const getAccountsLoadAction = createAction('[Accounts Page] Get Accounts Load');
export const getAccountsLoadSuccessAction = createAction('[Accounts Page] Get Accounts Load Success',
  props<{ toAccounts: Account[], fromAccount: Account }>());
export const getAccountsLoadErrorAction = createAction('[Accounts Page] Get Accounts Load Error',
  props<{ error: HttpErrorResponse }>());
