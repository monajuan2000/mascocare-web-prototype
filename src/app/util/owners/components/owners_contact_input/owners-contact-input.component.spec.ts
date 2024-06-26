import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersContactInputComponent } from './owners-contact-input.component';

describe('OwnersContactInputComponent', () => {
  let component: OwnersContactInputComponent;
  let fixture: ComponentFixture<OwnersContactInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersContactInputComponent]
    });
    fixture = TestBed.createComponent(OwnersContactInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
