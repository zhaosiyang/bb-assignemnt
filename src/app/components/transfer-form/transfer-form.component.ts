import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {RootState} from '../../core/reducers/root-reducer';
import {postTransactionsLoadAction, postTransactionsLoadSuccessAction} from '../../core/actions/transaction.actions';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {selectFromAccount, selectToAccounts} from '../../core/selectors/accounts.selectors';
import {Account} from '../../models/account';
import {Actions, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit, OnDestroy {

  toAccounts$: Observable<Account[]> = this.store.select(selectToAccounts);
  fromAccount$: Observable<Account | null> = this.store.select(selectFromAccount);

  formGroup = this.fb.group({
    fromAccountId: [null, Validators.required],
    toAccountId: [null, Validators.required],
    amount: [null, Validators.required],
  });

  isOverDraft$: Observable<boolean> = combineLatest([this.fromAccount$, this.amountControl.valueChanges]).pipe(
    map(([fromAccount, amount]) => {
      return fromAccount && amount && amount - (fromAccount.balance as number) > 500;
    })
  );

  subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store<RootState>, private actions$: Actions) {
    this.subscription.add(
      this.fromAccount$.subscribe(fromAccount => {
        if (fromAccount) {
          this.fromAccountControl.setValue(fromAccount.id);
        }
      }),
    );
    this.subscription.add(
      this.actions$.pipe(ofType(postTransactionsLoadSuccessAction)).subscribe(() => {
        this.toAccountIdControl.setValue(null);
        this.amountControl.setValue(null);
      })
    );
  }

  ngOnInit(): void {
    this.fromAccountControl.disable();
  }

  get fromAccountControl(): FormControl {
    return this.formGroup.get('fromAccountId') as FormControl;
  }

  get toAccountIdControl(): FormControl {
    return this.formGroup.get('toAccountId') as FormControl;
  }

  get amountControl(): FormControl {
    return this.formGroup.get('amount') as FormControl;
  }

  onSubmit(): void {
    this.store.dispatch(postTransactionsLoadAction(this.formGroup.value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
