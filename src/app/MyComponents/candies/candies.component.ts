import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-candies',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './candies.component.html',
  styleUrl: './candies.component.css'
})
export class CandiesComponent implements OnInit {
  candies = [
    { name: 'Gummy Bears', description: 'Chewy gummy bears in various flavors', price: 5, image: 'assets/images/gummy_bears.jpg' },
    { name: 'Chocolate Truffles', description: 'Rich chocolate truffles', price: 15, image: 'assets/images/chocolate_truffles.jpg' },
    { name: 'Candy Canes', description: 'Classic peppermint candy canes', price: 3, image: 'assets/images/candy_canes.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
