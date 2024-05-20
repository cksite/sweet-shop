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
    { name: 'Chocolate Chip Cookies', description: 'Classic chocolate chip cookies', price: 10, image: 'https://plus.unsplash.com/premium_photo-1670253258590-9bfea76faacd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hvY29sYXRlJTIwQ2hpcCUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D' },
    { name: 'Oatmeal Raisin Cookies', description: 'Healthy oatmeal raisin cookies', price: 12, image: 'https://media.istockphoto.com/id/471483027/photo/cookies.jpg?s=2048x2048&w=is&k=20&c=bP38i5nq_1-3Y1-ZeLFnsEeLAVo1O2qmVXnTS0SShTs=' },
    { name: 'Peanut Butter Cookies', description: 'Soft and chewy peanut butter cookies', price: 8, image: 'https://images.unsplash.com/photo-1511730609347-730e2da3da59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGVhbnV0JTIwQnV0dGVyJTIwQ29va2llc3xlbnwwfHwwfHx8MA%3D%3D' },
    
    { name: 'Chocolate Chip Cookies', description: 'Classic chocolate chip cookies', price: 10, image: 'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hvY29sYXRlJTIwQ2hpcCUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D' },
    { name: 'Oatmeal Raisin Cookies', description: 'Healthy oatmeal raisin cookies', price: 12, image: 'https://media.istockphoto.com/id/90252391/photo/cookies.jpg?s=2048x2048&w=is&k=20&c=OQYnBZoMQr2xusDAI2nAE1JXUGMGEIjY6tdejiSUOJE=' },
    { name: 'Peanut Butter Cookies', description: 'Soft and chewy peanut butter cookies', price: 8, image: 'https://images.unsplash.com/photo-1615110250484-e8c3b151b957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlYW51dCUyMEJ1dHRlciUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D' },

    { name: 'Chocolate Chip Cookies', description: 'Classic chocolate chip cookies', price: 10, image: 'https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENob2NvbGF0ZSUyMENoaXAlMjBDb29raWVzfGVufDB8fDB8fHww' },
    { name: 'Oatmeal Raisin Cookies', description: 'Healthy oatmeal raisin cookies', price: 12, image: 'https://images.unsplash.com/photo-1673565984310-74007c900264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T2F0bWVhbCUyMFJhaXNpbiUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D' },
    { name: 'Peanut Butter Cookies', description: 'Soft and chewy peanut butter cookies', price: 8, image: 'https://images.unsplash.com/photo-1506184341422-6cc152ae474b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBlYW51dCUyMEJ1dHRlciUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D' }

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
