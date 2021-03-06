import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/hero';
import { HeroService } from 'app/hero-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes.slice(0,4));
  }

}
