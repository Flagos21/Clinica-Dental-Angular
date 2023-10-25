import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulHoursComponent } from './schedul-hours.component';

describe('SchedulHoursComponent', () => {
  let component: SchedulHoursComponent;
  let fixture: ComponentFixture<SchedulHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulHoursComponent]
    });
    fixture = TestBed.createComponent(SchedulHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
