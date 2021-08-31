import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, selectGods, selectGodsLength} from "../store/god.selectors";
import {GodModel} from "./god/god.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  gods: GodModel[] | undefined;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(selectGods).subscribe(gods => {
      this.gods = gods
    })
  }

}
