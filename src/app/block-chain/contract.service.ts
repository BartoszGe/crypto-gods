import {Injectable} from '@angular/core';
import Web3 from "web3";
import {GOD_ABI, GOD_ADDRESS} from "../../assets/abi/god_abi";

declare const window: any;


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  window:any;
  web3js: any;
  provider: any;
  accounts: any;
  godContract: any;

  constructor() { }
  private getAccounts = async () => {
    try {
      return await window.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
      return [];
    }
  }

  public openMetamask = async () => {
    this.web3js = new Web3(window.ethereum);
    let addresses = await this.getAccounts();
    console.log("service",addresses)
    if (!addresses.length) {
      try {
        addresses = await window.ethereum.enable();
      } catch (e) {
        return false;
      }
    }
    return addresses.length ? addresses[0] : null;
  };

  public sendMyEth = async () => {
    this.accounts = await this.web3js.eth.getAccounts();

    return  new this.web3js.eth.sendTransaction({
      from: '0x8b71cB8ae6a7ac0Ffc5b2C837F2c73B6ed2980E6',
      to: '0xC5D0Fc2D64207B679d76F6010916e6b28e78646f',
      value: '1000000000000000000'
    }).on('transactionHash', () => console.log('transaction'));

  }

  public getOwner = async () => {
    this.accounts = await this.web3js.eth.getAccounts();

    this.godContract = new this.web3js.eth.Contract(GOD_ABI.abi, GOD_ADDRESS);

    console.log(this.godContract)

    return await this.godContract
      .methods.owner()
      .call({from: this.accounts[0]});
  }

}
