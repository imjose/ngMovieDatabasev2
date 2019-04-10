import { TestBed } from '@angular/core/testing';

import { MdLogicService } from './md-logic.service';

describe('MdLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdLogicService = TestBed.get(MdLogicService);
    expect(service).toBeTruthy();
  });
});
