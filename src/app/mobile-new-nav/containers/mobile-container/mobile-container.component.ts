import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomService} from "@flfr-app/services/dom.service";

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.scss']
})
export class MobileContainerComponent implements OnInit {
  @ViewChild('one') divOne!: ElementRef;
  @ViewChild('two') divTwo!: ElementRef;
  @ViewChild('three') divThree!: ElementRef;

  public displayHeaderChoice = false;

  constructor(private _domService: DomService) {
  }

  ngOnInit(): void {
    /*
        const onScroll = fromEvent(window, 'scroll');
        let lastY = 0;
        onScroll
          .pipe(debounceTime(50),
            distinctUntilChanged())
          .subscribe(scroll => {
            if (lastY > document.documentElement.scrollTop) {
              // On scroll vers le haut
              if (this.divTwo.nativeElement.getBoundingClientRect().y > 0 && this.divTwo.nativeElement.getBoundingClientRect().y <= this.divTwo.nativeElement.getBoundingClientRect().height) {
                this.divOne.nativeElement.scrollIntoView()
              }
              if (this.divThree.nativeElement.getBoundingClientRect().y > 0 && this.divThree.nativeElement.getBoundingClientRect().y <= this.divThree.nativeElement.getBoundingClientRect().height) {
                this.divTwo.nativeElement.scrollIntoView()
              }
            } else {
              if (+this.divTwo.nativeElement.getBoundingClientRect().y > 0 && +this.divTwo.nativeElement.getBoundingClientRect().y < this.divTwo.nativeElement.getBoundingClientRect().height) {
                this.divTwo.nativeElement.scrollIntoView()
              }
              if (+this.divThree.nativeElement.getBoundingClientRect().y > 0 && +this.divThree.nativeElement.getBoundingClientRect().y < this.divThree.nativeElement.getBoundingClientRect().height) {
                this.divThree.nativeElement.scrollIntoView()
              }
            }
            lastY = document.documentElement.scrollTop;
          })
    */
  }

  displayHeader(): void {
    this.displayHeaderChoice = !this.displayHeaderChoice;
  }

  goToScreen(screen: ElementRef): void {
    this.displayHeader();
    screen.nativeElement.scrollIntoView();
  }
}
