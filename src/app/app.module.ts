import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
