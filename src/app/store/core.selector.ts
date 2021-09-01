import {BlockchainState} from "./web3/blockchain.state";
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import {GodsState} from "./god/godsState";
import {godReducer} from "./god/god.reducer";
import {blockchainReducer} from "./web3/blockchain.reducer";

export interface AppState {
  gods: GodsState;
  blockchain: BlockchainState;
}

export const selectGodsState = createFeatureSelector<AppState, GodsState>('gods');

export const selectBlockchainState = createFeatureSelector<AppState, BlockchainState>('blockchain');

export const reducers: ActionReducerMap<AppState> = {
  gods: godReducer,
  blockchain: blockchainReducer
};
