import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { FilterPipe } from '../filter.pipe';


  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
  
  
  @Component({
    selector: 'app-shop',
    standalone: true,
    imports: [FormsModule,CommonModule,FilterPipe],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css'
  })
  export class ShopComponent {
searchText:  any="";

  // TrackBy function for *ngFor
  // trackByIndex(index: number, item: any): number {
  //   return index;
  // }


     
   products: Product[] = [
      {
          id: 1,
          name: "Running Shoes",
          price: 5000 ,
          description: "Comfortable shoes for everyday use.",
          imageUrl: "images/card-item10.jpg"
      },
      {
          id: 2,
          name: "Sneakers",
          price: 4000,
          description: "Stylish sneakers for casual wear.",
          imageUrl: "images/card-item9.jpg"
      },
      {
          id: 3,
          name: "Formal Shoes",
          price: 7000,
          description: "Elegant formal shoes for office wear.",
          imageUrl: "images/card-item7.jpg"
      },
      {
        id: 4,
        name: "Loafers",
        price: 2000,
        description: "Elegant formal shoes for office wear.",
        imageUrl: "images/card-item6.jpg"
    },
    {
      id: 5,
      name: "Casual Sneakers",
      price: 3000,
      description: "Elegant formal shoes for office wear.",
      imageUrl: "images/card-item5.jpg"
  },
  {
    id: 6,
    name: "Slip-On-shoes",
    price: 4000,
    description: "Elegant formal shoes for office wear.",
    imageUrl: "images/card-item7.jpg"
  },
  {
    id: 7,
    name: "Formal Shoes",
    price: 2000,
    description: "Elegant formal shoes for office wear.",
    imageUrl: "images/card-item3.jpg"
  },
  {
    id: 8,
    name: "Sports Shoes",
    price: 5200,
    description: "Elegant formal shoes for office wear.",
    imageUrl: "images/card-item2.jpg"
  },
  {
    id: 9,
    name: "Formal Shoes",
    price: 3600,
    description: "Elegant formal shoes for office wear.",
    imageUrl: "images/card-item10.jpg"
  }
  ];
  constructor(private cartService: CartService) {}
  // addToCart(products: Product) {
  //   this.cartService.addToCart(products );
  //   // console.log(products);
  //   alert(`${products.name}: added to cart!`);
  // }
  
  addToCart(item: any): void {
    console.log('Added to cart:', item);
    this.cartService.addToCart(item);
    alert(`${item.name}: added to cart!`);
  }
    
  
  }
  


