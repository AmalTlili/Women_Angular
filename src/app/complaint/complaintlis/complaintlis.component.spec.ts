import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintlisComponent } from './complaintlis.component';

describe('ComplaintlisComponent', () => {
  let component: ComplaintlisComponent;
  let fixture: ComponentFixture<ComplaintlisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintlisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
