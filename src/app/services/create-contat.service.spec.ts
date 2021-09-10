import { TestBed } from '@angular/core/testing';

import { CreateContatService } from './create-contat.service';

describe('CreateContatService', () => {
  let service: CreateContatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateContatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
