import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClinicHistoryComponent } from './list-clinic-history.component';

describe('ListClinicHistoryComponent', () => {
  let component: ListClinicHistoryComponent;
  let fixture: ComponentFixture<ListClinicHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListClinicHistoryComponent]
    });
    fixture = TestBed.createComponent(ListClinicHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
