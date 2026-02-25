import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOverviewPageComponent } from './events-overview-page.component';

describe('EventsOverviewPageComponent', () => {
  let component: EventsOverviewPageComponent;
  let fixture: ComponentFixture<EventsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
