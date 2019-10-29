import { TestBed } from '@angular/core/testing';

import { PlayerlistService } from './playerlist.service';

describe('PlayerlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerlistService = TestBed.get(PlayerlistService);
    expect(service).toBeTruthy();
  });
});
