import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesListPage } from './heroes-list.page';

describe('HeroesListPage', () => {
  let component: HeroesListPage;
  let fixture: ComponentFixture<HeroesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
