import { TestBed, inject } from '@angular/core/testing';

import { FetchjsondataService } from './fetchjsondata.service';

describe('FetchjsondataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchjsondataService]
    });
  });

  it('should be created', inject([FetchjsondataService], (service: FetchjsondataService) => {
    expect(service).toBeTruthy();
  }));
});
