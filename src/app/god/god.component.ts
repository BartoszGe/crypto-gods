import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.scss']
})
export class GodComponent implements OnInit {

  @Input() imagePath = '';

  constructor() { }

  ngOnInit(): void {
  }

}
