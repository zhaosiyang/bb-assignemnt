import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../services/api.service';
import {getTransactionsLoadAction, getTransactionsLoadErrorAction, getTransactionsLoadSuccessAction} from '../actions/transaction.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class GetTransactionsEffects {

  onLoad$ = createEffect(() => this.actions$.pipe(
    ofType(getTransactionsLoadAction),
    switchMap(() => this.apiService.getTransactions().pipe(
      map(transactions => getTransactionsLoadSuccessAction({transactions})),
      catchError(error => of(getTransactionsLoadErrorAction({error}))),
    )),
  ));

  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
