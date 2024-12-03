import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs'; // Import required RxJS modules
interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Products[] = []; 

  // constructor() {}
  private cartItems = new BehaviorSubject<any[]>([]);// Observable array
 
  getCartItems(): Observable<any[]> {
    return this.cartItems.asObservable(); // Expose as observable
  }

  addToCart(item: any): void {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]); // Add new item to cart
  }

  removeFromCart(index: number): void {
    const currentItems = this.cartItems.value;
    if (index >= 0 && index < currentItems.length) {
      currentItems.splice(index, 1); // Remove item at the specified index
      this.cartItems.next([...currentItems]); // Update BehaviorSubject
    }
  }
  clearCart(): void {
    this.cartItems.next([]); // Reset cart to an empty array
  }
    
}

