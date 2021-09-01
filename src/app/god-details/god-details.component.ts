import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GodModel} from "../main-page/god/god.model";
import {Store} from "@ngrx/store";
import {AppState} from "../store/core.selector";
import {ContractService} from "../block-chain/contract.service";
import {selectGods} from "../store/god/god.selectors";
import {MatTableDataSource} from "@angular/material/table";

interface GodDetails {
  id: number,
  date: Date,
  bidderAddress: string,
  amount: number
}

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

    this.contractService.init().then(() =>
      this.contractService.takeGodDetails(this.id).then(response => {
        this.dataSource.data = this.mapFromBlockchain(response);
      })
    )
  }

  ngOnInit(): void {
  }

  private mapFromBlockchain(response: any): GodDetails[] {
    const godDetails: GodDetails[] = []
    const tableLength = response[0].length - 1;
    response[0].map((detail: any, index: number) => {
      const revertedIndex = tableLength - index;
      godDetails.push({
        id: index,
        date: response[0][revertedIndex],
        bidderAddress: response[1][revertedIndex],
        amount: response[2][revertedIndex]
      })
    })
    return godDetails;
  }

}
