import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import {Product} from 'src/app/model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private messageService: MessageService) {}

  @Input()
  product: Product;
  @Output() ClickProductChange = new EventEmitter<any>();
  
  addtocart(prod: any) {
    console.log('prod=', prod);

    // this.addToCartFlag=!this.addToCartFlag
    this.messageService.add({
      severity: 'success',
      detail: 'Item successfully added to cart',
    });
  }
  visible: boolean = false;
  @Output()
  ClickCardChanged = new EventEmitter<any>();
  onCardClick() {   
    this.visible=true
    this.ClickCardChanged.emit(this.visible);
    this.ClickProductChange.emit(this.product);
  }
}
