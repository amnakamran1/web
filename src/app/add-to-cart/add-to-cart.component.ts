import { Component ,OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent  implements OnInit  {
  
  cartItem: any[] = [];
  
    constructor(private cartService: CartService) {}

  
    ngOnInit() {
      
      this.cartService.getCartItems().subscribe((items) => {
        this.cartItem = items;
      });
    }
  
    removeItem(index: number) {

      this.cartService.removeFromCart(index);
    }
  
    clearCart() {
      
      this.cartService.clearCart();
    }
  }
  
  


