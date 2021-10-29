import { Component, OnDestroy, OnInit } from '@angular/core';
import { pictureTitlePath } from "@flfr-app/models/PictureTitlePath";
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  toggle: boolean = false;
  imagesToShow: pictureTitlePath[] = [];
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();
  scrollingMode: boolean = false;

  constructor() { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: Event) => {
        if (window.pageYOffset > 0) {
          this.scrollingMode = true;
        } else {
          this.scrollingMode = false;
        }
      });
  }

  openMorePictures(event: pictureTitlePath[]) {
    this.imagesToShow = event;
    this.toggle = event.length > 0;
  }
}
