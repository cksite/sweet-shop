import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-bakery',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.css'
})
export class BakeryComponent implements OnInit {
  bakeryItems = [
    { name: 'Croissant', description: 'Flaky and buttery croissant', price: 3, image: 'assets/images/croissant.jpg' },
    { name: 'Bagel', description: 'Chewy and delicious bagel', price: 2, image: 'assets/images/bagel.jpg' },
    { name: 'Baguette', description: 'Crusty and soft baguette', price: 4, image: 'assets/images/baguette.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
