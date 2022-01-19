import { TestBed } from '@angular/core/testing';

import { DataimageService } from './dataimage.service';

describe('DataimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataimageService = TestBed.get(DataimageService);
    expect(service).toBeTruthy();
  });
});
