import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../services/api.service';
import {
  postTransactionsLoadAction,
  postTransactionsLoadErrorAction,
  postTransactionsLoadSuccessAction
} from '../actions/transaction.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PostTransactionEffects {

  onLoad$ = createEffect(() => this.actions$.pipe(
    ofType(postTransactionsLoadAction),
    switchMap(action => this.apiService.postTransaction(action.fromAccountId, action.toAccountId, action.amount).pipe(
      map(transaction => postTransactionsLoadSuccessAction({transaction, amount: action.amount})),
      catchError(error => of(postTransactionsLoadErrorAction({error}))),
    )),
  ));

  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
