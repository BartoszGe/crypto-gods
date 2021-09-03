import {Injectable} from '@angular/core';
import Web3 from "web3";
import {GOD_ADDRESS, GOD_ARTIFACT} from "../../assets/abi/god_abi_rinkeby";

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  web3: any;
  window: any;
  provider: any;
  accounts: any;
  godContract: any;

  constructor() {}

  public async init(): Promise<any> {
    this.web3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
    return this.web3;
  }

  // private getAccounts = async () => {
  //   try {
  //     return await window.ethereum.request({method: 'eth_accounts'});
  //   } catch (e) {
  //     return [];
  //   }
  // }

  // public openMetamask = async () => {
  //
  //   let addresses = await this.getAccounts();
  //   console.log("service", addresses)
  //   if (!addresses.length) {
  //     try {
  //       addresses = await window.ethereum.enable();
  //     } catch (e) {
  //       return false;
  //     }
  //   }
  //   return addresses.length ? addresses[0] : null;
  // };

  // public sendMyEth = async () => {
  //   this.accounts = await this.web3js.eth.getAccounts();
  //
  //   return new this.web3js.eth.sendTransaction({
  //     from: '0x8b71cB8ae6a7ac0Ffc5b2C837F2c73B6ed2980E6',
  //     to: '0xC5D0Fc2D64207B679d76F6010916e6b28e78646f',
  //     value: '1000000000000000000'
  //   }).on('transactionHash', () => console.log('transaction'));
  //
  // }
  //
  public takeGodDetails = async (id: number) => {
    this.godContract = new this.web3.eth.Contract(GOD_ARTIFACT.abi, GOD_ADDRESS);
    return await this.godContract.methods
      .getBids(id)
      .call();
  }
}
