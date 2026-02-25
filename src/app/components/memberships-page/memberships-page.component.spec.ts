import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsPageComponent } from './memberships-page.component';

describe('MembershipsPageComponent', () => {
  let component: MembershipsPageComponent;
  let fixture: ComponentFixture<MembershipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
