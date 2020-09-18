import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootState} from './core/reducers/root-reducer';
import {getTransactionsLoadAction} from './core/actions/transaction.actions';
import {getAccountsLoadAction} from './core/actions/account.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getTransactionsLoadAction());
    this.store.dispatch(getAccountsLoadAction());
  }
}
