import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneypotComponent } from './moneypot.component';

describe('MoneypotComponent', () => {
  let component: MoneypotComponent;
  let fixture: ComponentFixture<MoneypotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneypotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneypotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
