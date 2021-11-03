import {Component, OnDestroy, OnInit} from '@angular/core';
import {pictureTitlePath} from '@flfr-app/models/PictureTitlePath';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  toggle = false;
  imagesToShow: pictureTitlePath[] = [];
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();
  scrollingMode = false;

  constructor() {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.scrollingMode = window.pageYOffset > 0;
      });
  }

  openMorePictures(event: pictureTitlePath[]): void {
    this.imagesToShow = event;
    this.toggle = event.length > 0;
  }
}
