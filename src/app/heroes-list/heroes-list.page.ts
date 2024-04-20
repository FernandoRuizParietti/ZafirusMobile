import { Component, OnInit } from '@angular/core';
import { RequestService } from '../core/service/request.service';
import { Data, Heroe, MainResponse } from '../core/interfaces/resp.interface';
import { Router } from '@angular/router';
import { UrlManagementService } from '../core/service/url-management.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss'],
})
export class HeroesListPage implements OnInit {
  list: Data | undefined;
  loading: boolean = true;
  heroes: Heroe[] = [];

  constructor(
    public requestService: RequestService,
    public router: Router,
    public urlManagementService: UrlManagementService
  ) {}

  ngOnInit() {
    const list = this.requestService.getInfoFromApi('characters').subscribe(
      (response: any) => {
        this.list = response.data;
        this.heroes = response.data.results;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  goToItemDetail($element: Heroe) {
    this.urlManagementService.navigateToUrlWithParameters('heroes-detail', {
      state: { data: $element },
    });
  }

  return() {
    this.router.navigate(['/home']);
  }
}
