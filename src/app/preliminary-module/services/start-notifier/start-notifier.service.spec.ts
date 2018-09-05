import { TestBed, inject } from '@angular/core/testing';

import { StartNotifierService } from './start-notifier.service';

describe('StartNotifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartNotifierService]
    });
  });

  it('should be created', inject([StartNotifierService], (service: StartNotifierService) => {
    expect(service).toBeTruthy();
  }));
});
