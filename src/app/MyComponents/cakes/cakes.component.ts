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
    { name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 20, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Vanilla Cake', description: 'Creamy vanilla cake', price: 18, image: 'https://images.unsplash.com/photo-1536599524557-5f784dd53282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFuaWxsYSUyMENha2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 22, image: 'https://images.unsplash.com/photo-1579356094148-9b74dab60f5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3RyYXdiZXJyeSUyMENha2V8ZW58MHx8MHx8fDA%3D' },
    
    { name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 20, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hvY29sYXRlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Vanilla Cake', description: 'Creamy vanilla cake', price: 18, image: 'https://images.unsplash.com/photo-1596567836640-3c13eb102106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFZhbmlsbGElMjBDYWtlfGVufDB8fDB8fHww' },
    { name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 22, image: 'https://images.unsplash.com/photo-1603664113651-2f4fde639823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN0cmF3YmVycnklMjBDYWtlfGVufDB8fDB8fHww' },

    { name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 20, image: 'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENob2NvbGF0ZSUyMENha2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Vanilla Cake', description: 'Creamy vanilla cake', price: 18, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VmFuaWxsYSUyMENha2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 22, image: 'https://images.unsplash.com/photo-1567168476342-a8a14c1eff16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN0cmF3YmVycnklMjBDYWtlfGVufDB8fDB8fHww' }

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
