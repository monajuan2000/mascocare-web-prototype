import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersSignupInputComponent } from './owners-signup-input.component';

describe('OwnersSignupInputComponent', () => {
  let component: OwnersSignupInputComponent;
  let fixture: ComponentFixture<OwnersSignupInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersSignupInputComponent]
    });
    fixture = TestBed.createComponent(OwnersSignupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
