import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeEventComponent } from './qrcode-event.component';

describe('QrcodeEventComponent', () => {
  let component: QrcodeEventComponent;
  let fixture: ComponentFixture<QrcodeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
