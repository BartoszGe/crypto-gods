import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GodModel} from "./god/god.model";
import {AppState} from "../core/store/core.selector";
import {selectGods} from "../core/store/god/god.selectors";
import {ContractService} from "../core/block-chain/contract.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './main-page.component.scss'
  ]
})
export class MainPageComponent implements OnInit {
  gods: GodModel[] | undefined;

  constructor(private store: Store<AppState>, private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.store.select(selectGods).subscribe(gods => {
      this.gods = gods
    })
  }

  connectWallet() {
    this.contractService.openMetamask();
  }
}
