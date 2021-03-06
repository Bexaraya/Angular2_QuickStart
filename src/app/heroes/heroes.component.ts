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
      heroes => 
        this.heroes = heroes
    );
  }

  add(name: String): void {
    name = name.trim();
    if (!name)
    {
      return;
    }
    this.heroService.create(name)
        .then(
          hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
          }
        );
  }

  deleteHero(hero: Hero): void {
    if (!hero) {
      return;
    }
    this.heroService.delete(hero.id)
      .then(
        texto => {
          this.heroes.splice(this.heroes.indexOf(hero), 1);
          if (this.selectedHero == hero)
          {
            this.selectedHero = null;
          }
        }
      );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.heroRouter.navigate(['/detail', this.selectedHero.id]);
  }

}

