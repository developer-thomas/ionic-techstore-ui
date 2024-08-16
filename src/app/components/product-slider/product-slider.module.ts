import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from './product-slider.component';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ProductCardModule } from '../product-card/product-card.module';
register();

@NgModule({
  declarations: [ProductSliderComponent],
  imports: [CommonModule, IonicModule, ProductCardModule],
  exports: [ProductSliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSliderModule {}
