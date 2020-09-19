import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {RootState} from '../../core/reducers/root-reducer';
import {postTransactionsLoadAction} from '../../core/actions/transaction.actions';
import {Observable} from 'rxjs';
import {selectAccounts} from '../../core/selectors/accounts.selectors';
import {Account} from '../../models/account';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {

  fromAccountId = '123456789';
  fromAccountLabel = 'Free Checking(4692) - $5824.76';

  accounts$: Observable<Account[]> = this.store.select(selectAccounts);

  formGroup = this.fb.group({
    fromAccountId: [this.fromAccountId, Validators.required],
    toAccountId: [null, Validators.required],
    amount: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store<RootState>) { }

  ngOnInit(): void {
    (this.formGroup.get('fromAccountId') as FormControl).disable();
  }

  onSubmit(): void {
    this.store.dispatch(postTransactionsLoadAction(this.formGroup.value));
  }

}
