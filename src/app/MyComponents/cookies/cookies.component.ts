import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent implements OnInit {
  cookies = [
    { name: 'Chocolate Chip Cookies', description: 'Classic chocolate chip cookies', price: 10, image: 'assets/images/chocolate_chip_cookies.jpg' },
    { name: 'Oatmeal Raisin Cookies', description: 'Healthy oatmeal raisin cookies', price: 12, image: 'assets/images/oatmeal_raisin_cookies.jpg' },
    { name: 'Peanut Butter Cookies', description: 'Soft and chewy peanut butter cookies', price: 8, image: 'assets/images/peanut_butter_cookies.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
