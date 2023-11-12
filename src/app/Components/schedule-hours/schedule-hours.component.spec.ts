import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHoursComponent } from './schedule-hours.component';

describe('ScheduleHoursComponent', () => {
  let component: ScheduleHoursComponent;
  let fixture: ComponentFixture<ScheduleHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleHoursComponent]
    });
    fixture = TestBed.createComponent(ScheduleHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
