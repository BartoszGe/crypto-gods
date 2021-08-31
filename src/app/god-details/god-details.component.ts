import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GodModel} from "../main-page/god/god.model";
import {Store} from "@ngrx/store";
import {AppState, selectGods} from "../store/god.selectors";

@Component({
  selector: 'app-god-details',
  templateUrl: './god-details.component.html',
  styleUrls: ['./god-details.component.scss']
})
export class GodDetailsComponent implements OnInit {
  id: number;
  god: GodModel;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.id = this.route.snapshot.params['id'];
    this.store.select(selectGods).subscribe(gods => {
      if (gods) {
        this.god = gods[this.id]
      }
    })
  }

  ngOnInit(): void {
  }

}
