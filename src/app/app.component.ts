import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Practice';
  message = 'This is a demo project';
  display = true;
  productDetails = [];
  selectProducts = '';
  onClick() {
    this.display = !this.display;
  }
  serchText: string = '';
  onSerchtext(value: string) {
    this.serchText = value;
  }
  visible: boolean;
  onCardClick(value: any) {
    console.log('value=', value);
    this.visible = value;
  }
  onCard(value: any) {
    console.log('val==', value);
    this.visible = value;
  }
  productDetail(event) {
    this.productDetails = event;
  }
  selectProduct(event) {
    this.selectProducts = event;
  }
  @ViewChild(ProductComponent) productList: ProductComponent;
  
}
