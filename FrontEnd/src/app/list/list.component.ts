import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hero: Hero;
  heroes: Hero[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.hero = new Hero();
    this.getContacts();
  }

  getContacts() {
    this.apiService.getContacts().subscribe(data => {
      this.heroes = data;
    });
  }

  evolve(name: string) {
    this.apiService.evolveHero(name).subscribe(data => {
      this.hero = data.body;
      console.log(data);
    });
  }

  getRandomColor() {
    const color = Math.floor((Math.random() * 4) + 1);
    return 'random' + color;
  }

}
