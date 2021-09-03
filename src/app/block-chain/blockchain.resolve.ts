import {Injectable} from "@angular/core";
import {ContractService} from "./contract.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class BlockchainResolve implements Resolve<any> {
  constructor(private contractService: ContractService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      const interval = setInterval(() => {
        this.contractService.init().then(web3 => {
            web3.eth.net.isListening().then(() => {
              clearInterval(interval);
              resolve();
            })
          }
        );
      }, 1000);
    });
  }
}
