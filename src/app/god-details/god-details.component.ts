import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GodData} from "../main-page/main-page.component";

@Component({
  selector: 'app-god-details',
  templateUrl: './god-details.component.html',
  styleUrls: ['./god-details.component.scss']
})
export class GodDetailsComponent implements OnInit {
  id!: number;
  godData!: GodData;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
