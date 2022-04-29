import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactPannelComponent} from './contact-pannel.component';

describe('ContactPannelComponent', () => {
  let component: ContactPannelComponent;
  let fixture: ComponentFixture<ContactPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ContactPannelComponent]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
