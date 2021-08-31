import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GodState} from "./god.state";

export interface AppState {
  gods: GodState;
}

export const selectGodsState = createFeatureSelector<AppState, GodState>('gods');

export const selectGods = createSelector(
  selectGodsState,
  (state: GodState) => state.gods
);

export const selectGodsLength = createSelector(
  selectGodsState,
  (state: GodState) => state.gods?.length
);
