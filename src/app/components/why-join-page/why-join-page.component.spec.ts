import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJoinPageComponent } from './why-join-page.component';

describe('WhyJoinPageComponent', () => {
  let component: WhyJoinPageComponent;
  let fixture: ComponentFixture<WhyJoinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyJoinPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyJoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
