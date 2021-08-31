import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {update} from "./store/god.actions";
import {GodModel} from "./main-page/god/god.model";
import {AppState, selectGods} from "./store/god.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto-gods';

  private readonly IMAGES_ROUTE_PATH = '/assets/images/';

  //test
  gods: GodModel[] = [
    {
      id: 1,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.svg',
    },
    {
      id: 2,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.svg',
    },
    {
      id: 3,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.svg',
    },
    {
      id: 4,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.svg',
    }
  ]

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(update({gods: this.gods}));
  }
}
