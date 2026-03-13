import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventPopupComponent } from './upcoming-event-popup.component';

describe('UpcomingEventPopupComponent', () => {
  let component: UpcomingEventPopupComponent;
  let fixture: ComponentFixture<UpcomingEventPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingEventPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
