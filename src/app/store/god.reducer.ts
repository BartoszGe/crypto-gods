import {createReducer, on, Action} from '@ngrx/store';
import {GodState} from "./god.state";
import {update} from "./god.actions";

export const initialState: GodState = {
  gods: undefined
};

const reducer = createReducer(
  initialState,
  on(update, (state, {gods}) => ({ ...state, gods: gods})),
);

export function godReducer(
  state: GodState | undefined,
  action: Action
): GodState {
  return reducer(state, action);
}
