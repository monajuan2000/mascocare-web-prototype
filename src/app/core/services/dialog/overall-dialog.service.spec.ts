import { TestBed } from '@angular/core/testing';

import { OverallDialogService } from './overall-dialog.service';

describe('OverallDialogService', () => {
  let service: OverallDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverallDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
