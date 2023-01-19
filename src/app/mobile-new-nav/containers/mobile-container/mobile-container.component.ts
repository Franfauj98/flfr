import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomService} from "@flfr-app/services/dom.service";
import {CarouselInfos} from "@flfr-app/home-page/models/CarouselInfos";

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.scss']
})
export class MobileContainerComponent implements OnInit {
  @ViewChild('one') divOne!: ElementRef;
  @ViewChild('two') divTwo!: ElementRef;
  @ViewChild('three') divThree!: ElementRef;
  @ViewChild('four') divFour!: ElementRef;
  @ViewChild('five') divFive!: ElementRef;

  public displayHeaderChoice = false;
  item = [
    {
      'previewImageSrc': '/assets/images/carousel1.webp',
      'thumbnailImageSrc': '/assets/images/carousel1.webp',
      'alt': 'Description for Image 1',
      'title': 'Title 1'
    },
    {
      'previewImageSrc': '/assets/images/carousel2.webp',
      'thumbnailImageSrc': '/assets/images/carousel2.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel3.webp',
      'thumbnailImageSrc': '/assets/images/carousel3.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel4.webp',
      'thumbnailImageSrc': '/assets/images/carousel4.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel5.webp',
      'thumbnailImageSrc': '/assets/images/carousel5.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel6.webp',
      'thumbnailImageSrc': '/assets/images/carousel6.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel7.webp',
      'thumbnailImageSrc': '/assets/images/carousel7.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel8.webp',
      'thumbnailImageSrc': '/assets/images/carousel8.webp',
      'alt': '',
      'title': ''
    },
    {
      'previewImageSrc': '/assets/images/carousel9.webp',
      'thumbnailImageSrc': '/assets/images/carousel9.webp',
      'alt': '',
      'title': ''
    }
  ];

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

  openLink = (path: string) => {
    window.open(path);
  }
}
