import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    SearchComponent,
    ProductListComponent,
    FilterComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    DialogModule,
    DividerModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
