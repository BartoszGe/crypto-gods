import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GodModel} from "../main-page/god/god.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../core/store/core.selector";
import {ContractService} from "../../core/block-chain/contract.service";
import {selectGods} from "../../core/store/god/god.selectors";
import {MatTableDataSource} from "@angular/material/table";
import {GodDetails} from "./god-details.model";
import {mapGodDetailsFromBlockchain} from "../../core/block-chain/contract.service.util";

@Component({
  selector: 'app-god-details',
  templateUrl: './god-details.component.html',
  styleUrls: ['./god-details.component.scss']
})
export class GodDetailsComponent implements OnInit {
  displayedColumns: string[] = ["id", 'date', 'bidderAddress', 'amount'];
  dataSource = new MatTableDataSource<GodDetails>([]);

  id: number;
  god: GodModel;


  constructor(private route: ActivatedRoute,
              private contractService: ContractService,
              private store: Store<AppState>) {
    this.id = this.route.snapshot.params['id'];

    this.store.select(selectGods).subscribe(gods => {
      if (gods) {
        this.god = gods[this.id - 1]
      }
    })

    this.contractService.takeGodDetails(this.id)
      .then(response => {
        this.dataSource.data = mapGodDetailsFromBlockchain(response);
      }
    )
  }

  ngOnInit(): void {
  }
}
