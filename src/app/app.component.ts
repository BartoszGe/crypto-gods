import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./core/store/core.selector";
import {GodModel} from "./features/main-page/god/god.model";
import {saveGods} from "./core/store/god/god.actions";
import {Status} from './features/main-page/god/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly IMAGES_ROUTE_PATH = '/assets/images/god';


  //test
  gods: GodModel[] = [
    {
      id: 1,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.png',
      status: Status.BURNED
    },
    {
      id: 2,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.png',
      status: Status.ENDED
    },
    {
      id: 3,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.png',
      status: Status.ON_GOING
    },
    {
      id: 4,
      imagePath: this.IMAGES_ROUTE_PATH + 1 + '.png',
      status: Status.ENDING_SOON
    }
  ]

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(saveGods({gods: this.gods}));
  }
}
