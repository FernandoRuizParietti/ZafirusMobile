import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesDetailPageRoutingModule } from './heroes-detail-routing.module';

import { HeroesDetailPage } from './heroes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesDetailPageRoutingModule
  ],
  declarations: [HeroesDetailPage]
})
export class HeroesDetailPageModule {}
