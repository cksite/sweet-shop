import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cakes',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent],
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  cakes = [
    { name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 20, image: 'assets/images/chocolate_cake.jpg' },
    { name: 'Vanilla Cake', description: 'Creamy vanilla cake', price: 18, image: 'assets/images/vanilla_cake.jpg' },
    { name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 22, image: 'assets/images/strawberry_cake.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
