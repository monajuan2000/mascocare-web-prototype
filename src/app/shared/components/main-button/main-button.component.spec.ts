import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared.module';

import { MainButtonComponent } from './main-button.component';

describe('MainButtonComponent', () => {
  let component: MainButtonComponent;
  let fixture: ComponentFixture<MainButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(MainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
