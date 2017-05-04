import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/hero'
import { HeroService } from 'app/hero-service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'], 
  providers: [
    HeroService
  ]
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private heroRouter: Router  
  ) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(
      heroes => this.heroes = heroes
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.heroRouter.navigate(['/detail', this.selectedHero.id]);
  }

}

