import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMidbannerComponent } from './character-midbanner.component';

describe('CharacterMidbannerComponent', () => {
  let component: CharacterMidbannerComponent;
  let fixture: ComponentFixture<CharacterMidbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterMidbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterMidbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
