import { Component ,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ecomerce';
  searchText = '';
  public totalItems: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe({
      next: (res: any[]) => {
        this.totalItems = res.length;
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
        this.totalItems = 0; // Fallback if error occurs
      },
    });
  }
}
