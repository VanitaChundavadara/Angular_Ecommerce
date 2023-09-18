import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {Product} from 'src/app/model/Product';
import { ProductComponent } from '../product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input()
  visible: boolean = false;
  
  @Output() cardclick = new EventEmitter<any>();
  onCardClick() {
    this.cardclick.emit(false);
  }
  @Input()
  productlistComp: ProductComponent = undefined;
  product: Product;
  
  ngOnInit() {
    this.product = this.productlistComp.selectedProduct;
    console.log("thisonInit=",this.productlistComp.selectedProduct);
  }
  ngOnChanges() {
    this.product=this.productlistComp.selectedProduct;
    console.log("thisonChanges=",this.product);
  }
}
