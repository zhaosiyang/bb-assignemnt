import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Transaction} from '../../models/transaction';
import {selectTransactions} from '../../core/selectors/transactions.selectors';
import {Store} from '@ngrx/store';
import {RootState} from '../../core/reducers/root-reducer';
import {stringToColor} from '../../utils/string-to-color';
import {createFadeInAnimation} from '../../animations/fade-in-out';

@Component({
  selector: 'app-transactions-viewer',
  templateUrl: './transactions-viewer.component.html',
  styleUrls: ['./transactions-viewer.component.scss'],
  animations: [
    createFadeInAnimation(),
  ],
})
export class TransactionsViewerComponent implements OnInit {

  transactions$: Observable<Transaction[]> = this.store.select(selectTransactions);

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
  }

  getColor(transaction: Transaction): string {
    return stringToColor(transaction.merchant);
  }
}
