import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared.module';

import { OverallDialogStructureComponent } from './overall-dialog-structure.component';

describe('OverallDialogStructureComponent', () => {
  let component: OverallDialogStructureComponent;
  let fixture: ComponentFixture<OverallDialogStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(OverallDialogStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
