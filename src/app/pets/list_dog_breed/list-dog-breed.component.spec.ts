import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDogBreedsComponent } from './list-dog-breed.component';

describe('ListDogBreedsComponent', () => {
  let component: ListDogBreedsComponent;
  let fixture: ComponentFixture<ListDogBreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDogBreedsComponent],
    });
    fixture = TestBed.createComponent(ListDogBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
