import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BlockchainState} from "./blockchain.state";
import {selectBlockchainState} from "../core.selector";

export const selectWeb3 = createSelector(
  selectBlockchainState,
  (state: BlockchainState) => state.web3
);
