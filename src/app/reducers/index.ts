import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  count: number
}

function reducer (state = 0): number {
  return state;
}

export const reducers: ActionReducerMap<State> = {
  count: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
