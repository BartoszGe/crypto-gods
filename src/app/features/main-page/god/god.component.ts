import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GodModel} from "./god.model";
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.scss']
})
export class GodComponent implements OnInit {

  @Input() god: GodModel;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigateByUrl('gods/' + this.god.id + '/details');
  }
}
