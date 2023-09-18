import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService],
})
export class ProductComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  event: any;
  @Output() arraylist = new EventEmitter<any>();
  count: number = 0;

  selectedProduct: Product;
  @Output() selectProd = new EventEmitter<any>();

  product = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      price: 109.95,
      category: "Men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    },
    {
      id: 2,
      title: 'Opna Women Short Sleeve Moisture',
      price: 122,
      category: "Women's clothing",
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      stock: 3,
      description:
        '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    },
    {
      id: 3,
      title: 'White Gold Plated Princess',
      price: 9.99,
      category: 'Jewelery',
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      stock: 0,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    },
    {
      id: 4,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      category: "Men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 1,
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    },

    {
      id: 5,
      title: 'Solid Gold Petite Micropave',
      price: 168,
      category: 'Jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      stock: 0,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    },
    {
      id: 6,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      category: "Men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 13,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    },
    {
      id: 7,
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      price: 109.95,
      category: "Men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    },
    {
      id: 8,
      title: 'Opna Women Short Sleeve Moisture',
      price: 122,
      category: "Women's clothing",
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      stock: 3,
      description:
        '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    },
    {
      id: 9,
      title: 'White Gold Plated Princess',
      price: 9.99,
      category: 'Jewelery',
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      stock: 0,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    },
    {
      id: 10,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      category: "Men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 1,
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    },

    {
      id: 11,
      title: 'Solid Gold Petite Micropave',
      price: 168,
      category: 'Jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      stock: 0,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    },
    {
      id: 12,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      category: "Men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 13,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    },
  ];
  totalProductCount: number = this.product.length;
  totalProductCountInStock: number = this.product.filter(
    (p: any) => p.stock > 0
  ).length;
  totalProductCountOutofStock: number = this.product.filter(
    (p: any) => p.stock < 1
  ).length;
  selectedbutton: string = 'all';
  onFilterChange(value: string) {
    console.log('value=', value);
    this.selectedbutton = value;
  }

  ngOnInit() {
    this.arraylist.emit(this.product);
    this.selectProd.emit(this.selectedProduct);
  }
  @Input()
  inputSerchText: string = '';

  @Output()
  visibleflag = new EventEmitter<any>();
  onClickCard(event: any) {
    this.visibleflag.emit(event);
    this.selectProd.emit(this.selectedProduct);
  }

  setSelectedProd(event: any) {
    this.selectedProduct = event;
    this.selectProd.emit(event);
  }
 
}
