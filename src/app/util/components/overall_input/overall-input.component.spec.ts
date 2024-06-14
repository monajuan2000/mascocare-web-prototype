import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallInputComponent } from './overall-input.component';

describe('OverallInputComponent', () => {
  let component: OverallInputComponent;
  let fixture: ComponentFixture<OverallInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallInputComponent]
    });
    fixture = TestBed.createComponent(OverallInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
