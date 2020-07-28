import { TestBed } from '@angular/core/testing';

import { OperadorServiceService } from './operador-service.service';

describe('OperadorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperadorServiceService = TestBed.get(OperadorServiceService);
    expect(service).toBeTruthy();
  });
});
