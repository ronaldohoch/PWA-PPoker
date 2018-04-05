import { TestBed, inject } from '@angular/core/testing';

import { VibrationService } from './vibration.service';

describe('VibrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VibrationService]
    });
  });

  it('should be created', inject([VibrationService], (service: VibrationService) => {
    expect(service).toBeTruthy();
  }));
});
