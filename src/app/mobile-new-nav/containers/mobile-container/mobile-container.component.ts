import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {DomService} from "@flfr-app/services/dom.service";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.scss']
})
export class MobileContainerComponent implements OnInit {
  @ViewChild('one') divOne!: ElementRef;
  @ViewChild('two') divTwo!: ElementRef;
  @ViewChild('three') divThree!: ElementRef;

  test1 = false;
  test2 = false;
  test3 = false;
  test4 = false;

  constructor(private _domService: DomService) {
  }

  ngOnInit(): void {
    const onScroll = fromEvent(window, 'scroll');
    let lastY = 0;
    onScroll
      .subscribe(scroll => {
        if (lastY > document.documentElement.scrollTop) {
          // On scroll vers le haut
          if (this.divTwo.nativeElement.getBoundingClientRect().y > 0 && this.divTwo.nativeElement.getBoundingClientRect().y <= this.divTwo.nativeElement.getBoundingClientRect().height) {
            this.test2 = false;
            this.test3 = false;
            this.test4 = false;
            if (!this.test1) {
              console.log(1)
              this.divOne.nativeElement.scrollIntoView()
              this.test1 = true;
            }
          }
          if (this.divThree.nativeElement.getBoundingClientRect().y > 0 && this.divThree.nativeElement.getBoundingClientRect().y <= this.divThree.nativeElement.getBoundingClientRect().height) {
            this.test1 = false;
            this.test3 = false;
            this.test4 = false;
            if (!this.test2) {
              console.log(2)
              this.divTwo.nativeElement.scrollIntoView()
              this.test2 = true;
            }
          }
        } else {
          if (+this.divTwo.nativeElement.getBoundingClientRect().y > 0 && +this.divTwo.nativeElement.getBoundingClientRect().y < this.divTwo.nativeElement.getBoundingClientRect().height) {
            this.test1 = false;
            this.test2 = false;
            this.test4 = false;
            if (!this.test3) {
              console.log(3)
              this.divTwo.nativeElement.scrollIntoView()
              this.test3 = true;
            }
          }
          if (+this.divThree.nativeElement.getBoundingClientRect().y > 0 && +this.divThree.nativeElement.getBoundingClientRect().y < this.divThree.nativeElement.getBoundingClientRect().height) {
            this.test1 = false;
            this.test2 = false;
            this.test3 = false;
            if (!this.test4) {
              console.log(4)
              this.divThree.nativeElement.scrollIntoView()
              this.test4 = true;
            }
          }
        }
        lastY = document.documentElement.scrollTop;
      })
  }

  test() {
    this.divThree.nativeElement.scrollIntoView({behavior: 'instant', block: 'center'})
  }
}
