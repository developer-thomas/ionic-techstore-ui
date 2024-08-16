import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeSlideHeaderModule } from '../components/home-slide-header/home-slide-header.module';
import { CategoryCardModule } from '../components/category-card/category-card.module';
import { register } from 'swiper/element/bundle';
import { ProductSliderModule } from '../components/product-slider/product-slider.module';
register();
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeSlideHeaderModule,
    CategoryCardModule,
    ProductSliderModule,
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
