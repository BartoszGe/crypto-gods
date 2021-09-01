import {createReducer, on, Action} from '@ngrx/store';
import {GodsState} from "./godsState";
import {saveGods} from "./god.actions";

export const initialState: GodsState = {
  gods: undefined
};

const reducer = createReducer(
  initialState,
  on(saveGods, (state, {gods}) => ({ ...state, gods: gods})),
);

export function godReducer(
  state: GodsState | undefined,
  action: Action
): GodsState {
  return reducer(state, action);
}
