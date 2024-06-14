import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersBasicInputComponent } from './owners-basic-input.component';

describe('OwnersBasicInputComponent', () => {
  let component: OwnersBasicInputComponent;
  let fixture: ComponentFixture<OwnersBasicInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersBasicInputComponent]
    });
    fixture = TestBed.createComponent(OwnersBasicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
