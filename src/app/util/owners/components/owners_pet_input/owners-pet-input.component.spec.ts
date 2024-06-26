import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersPetInputComponent } from './owners-pet-input.component';

describe('OwnersPetInputComponent', () => {
  let component: OwnersPetInputComponent;
  let fixture: ComponentFixture<OwnersPetInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersPetInputComponent]
    });
    fixture = TestBed.createComponent(OwnersPetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
