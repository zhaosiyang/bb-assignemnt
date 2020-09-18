import {GetTransactionsEffects} from './get-transactions.effects';
import {PostTransactionEffects} from './post-transaction.effects';
import {GetAccountsEffects} from './get-accounts.effects';

export const rootEffects = [
  GetTransactionsEffects,
  PostTransactionEffects,
  GetAccountsEffects,
];
