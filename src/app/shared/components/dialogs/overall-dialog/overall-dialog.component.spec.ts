import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared.module';

import { OverallDialogComponent } from './overall-dialog.component';

describe('OverallDialogComponent', () => {
  let component: OverallDialogComponent;
  let fixture: ComponentFixture<OverallDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(OverallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
