import {Component, OnInit} from '@angular/core';

export interface GodData {
  id: number,
  imagePath: string,
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  private readonly IMAGES_ROUTE_PATH = '/assets/images/';

  gods: GodData[] = [
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
