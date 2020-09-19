import {AccountState, accountStateReducer} from '../account-state.reducer';
import {getAccountsLoadAction, getAccountsLoadErrorAction, getAccountsLoadSuccessAction} from '../../actions/account.actions';

describe('Account State Reducer', () => {
  it('getAccountsLoadAction should correctly update state', () => {
    const oldState: AccountState = {
      fromAccount: null,
      toAccounts: [],
      getAccountsLoadable: {
        loading: false,
        success: false,
        error: null,
      },
    };
    const newState: AccountState = accountStateReducer(oldState, getAccountsLoadAction());
    expect(newState.getAccountsLoadable.loading).toBe(true);
  });

  it('getAccountsLoadSuccessAction should correctly update state', () => {
    const oldState: AccountState = {
      fromAccount: null,
      toAccounts: [],
      getAccountsLoadable: {
        loading: true,
        success: false,
        error: null,
      },
    };
    const newState: AccountState = accountStateReducer(oldState, getAccountsLoadSuccessAction({
      fromAccount: {
        id: '1',
        name: 'Kern',
        balance: 123
      }, toAccounts: [{id: '2', name: 'Kern2'}]
    }));

    expect(newState.getAccountsLoadable.success).toBe(true);
    expect(newState.getAccountsLoadable.loading).toBe(false);
    expect(newState.fromAccount?.id).toBe('1');
    expect(newState.fromAccount?.name).toBe('Kern');
    expect(newState.toAccounts.length).toBe(1);
    expect(newState.toAccounts[0].id).toBe('2');
    expect(newState.toAccounts[0].name).toBe('Kern2');
  });

  it('getAccountsLoadErrorAction should correctly update state', () => {
    const oldState: AccountState = {
      fromAccount: null,
      toAccounts: [],
      getAccountsLoadable: {
        loading: true,
        success: false,
        error: null,
      },
    };
    const newState: AccountState = accountStateReducer(oldState, getAccountsLoadErrorAction({error: 'mocked-error' as any}));
    expect(newState.getAccountsLoadable.error).toBe('mocked-error' as any);
    expect(newState.getAccountsLoadable.loading).toBe(false);
  });
});
