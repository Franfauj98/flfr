import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionTextImageComponent} from './section-text-image.component';

describe('SectionTextImageComponent', () => {
  let component: SectionTextImageComponent;
  let fixture: ComponentFixture<SectionTextImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [SectionTextImageComponent]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
