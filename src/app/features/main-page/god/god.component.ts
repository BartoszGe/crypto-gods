import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GodModel} from "./god.model";
import {fromEvent, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.scss']
})
export class GodComponent implements OnInit {

  @Input() god: GodModel;
  $isGodVisible: Observable<boolean>;

  constructor(private router: Router) {
    this.$isGodVisible = new Observable<boolean>(subscriber => {
      fromEvent(window, 'scroll')
        .subscribe((event: Event) => {
          if (this.getYPosition(event.target as Document) > 400) {
            subscriber.next(true);
          }
        });
    });
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigateByUrl('gods/' + this.god.id + '/details');
  }

  getYPosition(document: Document): number {
    return (document.scrollingElement as Element).scrollTop;
  }
}
