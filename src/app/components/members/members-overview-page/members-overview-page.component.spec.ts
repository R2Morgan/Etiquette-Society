import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersOverviewPageComponent } from './members-overview-page.component';

describe('MembersOverviewPageComponent', () => {
  let component: MembersOverviewPageComponent;
  let fixture: ComponentFixture<MembersOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersOverviewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembersOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
