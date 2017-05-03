import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero-service';

describe('HeroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
