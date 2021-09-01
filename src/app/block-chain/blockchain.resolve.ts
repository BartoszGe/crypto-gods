import {Injectable} from "@angular/core";
import {ContractService} from "./contract.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {saveWeb3} from "../store/web3/blockchain.actions";
import {AppState, selectBlockchainState} from "../store/core.selector";

@Injectable()
export class BlockchainResolve implements Resolve<any> {
  constructor(private contractService: ContractService, private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      const interval = setInterval(() => {
        this.contractService.init().then(() => {
          clearInterval(interval);
          resolve();
          }
        );
      }, 1000);
    });
  }
}
