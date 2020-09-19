import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../services/api.service';
import {getAccountsLoadAction, getAccountsLoadErrorAction, getAccountsLoadSuccessAction} from '../actions/account.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class GetAccountsEffects {

  onLoad$ = createEffect(() => this.actions$.pipe(
    ofType(getAccountsLoadAction),
    switchMap(() => this.apiService.getAccounts().pipe(
      map(({fromAccount, toAccounts}) => getAccountsLoadSuccessAction({toAccounts, fromAccount})),
      catchError(error => of(getAccountsLoadErrorAction({error}))),
    )),
  ));

  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
