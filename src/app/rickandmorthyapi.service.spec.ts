import { TestBed } from '@angular/core/testing';

import { RickandmorthyapiService } from './rickandmorthyapi.service';

describe('RickandmorthyapiService', () => {
  let service: RickandmorthyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickandmorthyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
