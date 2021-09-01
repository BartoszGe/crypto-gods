import {createReducer, on, Action} from '@ngrx/store';
import {BlockchainState} from "./blockchain.state";
import {saveWeb3} from "./blockchain.actions";

export const initialState: BlockchainState = {
  web3: undefined
};

const reducer = createReducer(
  initialState,
  on(saveWeb3, (state, {web3}) => ({ ...state, ...web3})),
);

export function blockchainReducer(
  state: BlockchainState | undefined,
  action: Action
): BlockchainState {
  return reducer(state, action);
}
