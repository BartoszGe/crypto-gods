import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store/core.selector";
import {GodModel} from "./main-page/god/god.model";
import {saveGods} from "./store/god/god.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
    this.store.dispatch(saveGods({gods: this.gods}));
  }
}
