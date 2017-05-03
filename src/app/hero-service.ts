import { Injectable } from '@angular/core';
import { HEROES } from 'app/mock-heroes'
import { Hero } from "app/hero";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 1 second delay
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }

}
