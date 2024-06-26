import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatBreedComponent } from './list-cat-breed.component';

describe('ListCatBreedComponent', () => {
  let component: ListCatBreedComponent;
  let fixture: ComponentFixture<ListCatBreedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCatBreedComponent]
    });
    fixture = TestBed.createComponent(ListCatBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
