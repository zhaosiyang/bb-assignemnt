import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Transaction} from '../../models/transaction';
import {selectTransactions} from '../../core/selectors/transactions.selectors';
import {Store} from '@ngrx/store';
import {RootState} from '../../core/reducers/root-reducer';
import {stringToColor} from '../../utils/string-to-color';
import {createFadeInAnimation} from '../../animations/fade-in-out';
import {debounceTime, map} from 'rxjs/operators';
import {getSortKeyLabel, SortDirection, SortKey} from './sort';

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
  search$ = new BehaviorSubject<string>('');
  sortKey$ = new BehaviorSubject<SortKey | null>(null);
  sortDirection$ = new BehaviorSubject<SortDirection>(SortDirection.Asc);

  SortKey = SortKey;
  SortDirection = SortDirection;
  getSortKeyLabel = getSortKeyLabel;

  filteredTransactions$: Observable<Transaction[]> = combineLatest([
    this.transactions$,
    this.search$.pipe(debounceTime(200))
  ]).pipe(
    map(([transactions, search]) => {
      return transactions.filter(transaction => this.transactionMatchSearch(transaction, search));
    })
  );

  SORT_PREDICATE = {
    [SortKey.Date]: (transaction: Transaction) => transaction.transactionDate,
    [SortKey.Amount]: (transaction: Transaction) => transaction.amount,
    [SortKey.Beneficiary]: (transaction: Transaction) => transaction.merchant,
  };

  sortedFilteredTransactions$: Observable<Transaction[]> = combineLatest([
    this.filteredTransactions$,
    this.sortKey$,
    this.sortDirection$,
  ]).pipe(
    map(([transactions, sortKey, sortDirection]) => {
      if (!sortKey) {
        return transactions;
      }
      const sorter = sortDirection === SortDirection.Asc ?
        (transaction1, transaction2) => this.SORT_PREDICATE[sortKey](transaction1) > this.SORT_PREDICATE[sortKey](transaction2) ? 1 : -1
        :
        (transaction1, transaction2) => this.SORT_PREDICATE[sortKey](transaction1) > this.SORT_PREDICATE[sortKey](transaction2) ? -1 : 1;
      return ([...transactions]).sort(sorter);
    }),
  );

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
  }

  onSearchChange(search: string): void {
    this.search$.next(search);
  }

  onSortClicked(key: SortKey): void {
    if (this.sortKey$.value !== key) {
      this.sortKey$.next(key);
      return;
    }
    if (this.sortDirection$.value === SortDirection.Asc) {
      this.sortDirection$.next(SortDirection.Desc);
    }
    else {
      this.sortKey$.next(null);
      this.sortDirection$.next(SortDirection.Asc);
    }
  }

  // Assumption: searchable on merchant, transactionType and amount
  private transactionMatchSearch(transaction: Transaction, search: string): boolean {
    const filterPredicate = (t: Transaction) => `${t.merchant} ${t.transactionType} ${t.amount}`.toLowerCase();
    return filterPredicate(transaction).indexOf(search.toLowerCase()) !== -1;
  }

  getColor(transaction: Transaction): string {
    return stringToColor(transaction.merchant);
  }
}
