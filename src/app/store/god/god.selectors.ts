import {createSelector} from '@ngrx/store';
import {GodsState} from "./godsState";
import {selectGodsState} from "../core.selector";

export const selectGods = createSelector(
  selectGodsState,
  (state: GodsState) => state.gods
);
