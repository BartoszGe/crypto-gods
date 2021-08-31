import {Component, Input, OnInit} from '@angular/core';
import {GodData} from "../main-page.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.scss']
})
export class GodComponent implements OnInit {

  @Input() godData!: GodData;

  constructor() {
  }

  ngOnInit(): void {
  }
}
