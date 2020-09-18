import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Transaction} from '../models/transaction';
import {generateRandomId} from '../utils/generate-random-id';
// @ts-ignore
import {data} from './mock/transactions.json';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  getTransactions(): Observable<Transaction[]> {
    const mockedTransactions = data.map(item => ({...item, id: generateRandomId(), amount: +item.amount}));
    return of(mockedTransactions);
  }

  postTransaction(fromAccountId: string, toAccountId: string, amount: number): Observable<Transaction> {
    return of({
      id: '1000',
      amount,
      categoryCode: '#12345',
      merchant: 'Kern\'s supermarket',
      merchantLogo: 'https://miro.medium.com/max/3150/1*J6dAFhmDK2BKMlHc-qD8fg.jpeg',
      transactionDate: Date.now(),
      transactionType: 'Card Payment',
    });
  }

  getAccounts(): Observable<Account[]> {
    return of([
      {
        id: generateRandomId(),
        name: 'TD Visa Card',
      },
      {
        id: generateRandomId(),
        name: 'Rogers Communication Family Account',
      },
      {
        id: generateRandomId(),
        name: 'RBC MasterCard',
      }
    ]);
  }
}
