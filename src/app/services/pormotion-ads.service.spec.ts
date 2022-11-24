import { TestBed } from '@angular/core/testing';

import { PormotionAdsService } from './pormotion-ads.service';

describe('PormotionAdsService', () => {
  let service: PormotionAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PormotionAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
