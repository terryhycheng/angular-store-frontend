import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDoneComponent } from './purchase-done.component';

describe('PurchaseDoneComponent', () => {
  let component: PurchaseDoneComponent;
  let fixture: ComponentFixture<PurchaseDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
