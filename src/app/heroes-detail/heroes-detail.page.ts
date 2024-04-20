import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, Data } from '../core/interfaces/resp.interface';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.page.html',
  styleUrls: ['./heroes-detail.page.scss'],
})
export class HeroesDetailPage implements OnInit {
  public record: any = '';
  heroeDetail: Heroe | undefined;

  constructor(public router: Router) {
    if (this.router.getCurrentNavigation() !== null) {
      const parameters = this.router.getCurrentNavigation()?.extras;
      this.record = parameters?.state;
    }
  }

  ngOnInit() {
    this.heroeDetail = this.record.data;
  }

  return() {
    this.router.navigate(['/heroes-list']);
  }
}
