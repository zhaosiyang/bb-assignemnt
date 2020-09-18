import {ActionCreator, ActionReducer, createReducer, on} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';

export interface Loadable {
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}

export function createDefaultLoadable(): Loadable {
  return {
    loading: false,
    success: false,
    error: null,
  };
}

export interface LoadableActions {
  loadAction: ActionCreator;
  successAction: ActionCreator;
  errorAction: ActionCreator;
  resetAction?: ActionCreator;
}

export function createDefaultLoadableReducer(loadableActions: LoadableActions): ActionReducer<Loadable> {
  const ons = [
    on<Loadable>(loadableActions.loadAction, () => ({loading: true, success: false, error: null})),
    on<Loadable>(loadableActions.successAction, () => ({loading: false, success: true, error: null})),
    on<Loadable>(loadableActions.errorAction, (state, action: any) => ({loading: false, success: false, error: action.error})),
  ];
  if (loadableActions.resetAction) {
    ons.push(on(loadableActions.resetAction, () => createDefaultLoadable()));
  }

  return createReducer<Loadable>(
    createDefaultLoadable(),
    ...ons,
  );
}
