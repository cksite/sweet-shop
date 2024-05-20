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
    { name: 'Croissant', description: 'Flaky and buttery croissant', price: 3, image: 'https://images.unsplash.com/photo-1691480162735-9b91238080f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENyb2lzc2FudCUyMEZsYWt5JTIwYW5kJTIwYnV0dGVyeSUyMGNyb2lzc2FudHxlbnwwfHwwfHx8MA%3D%3D' },

    { name: 'Bagel', description: 'Chewy and delicious bagel', price: 2, image: 'https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFnZWx8ZW58MHx8MHx8fDA%3D' },

    { name: 'Baguette', description: 'Crusty and soft baguette', price: 4, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFndWV0dGV8ZW58MHx8MHx8fDA%3D' },

    
    { name: 'Croissant', description: 'Flaky and buttery croissant', price: 3, image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZ3VldHRlfGVufDB8fDB8fHww' },

    { name: 'Bagel', description: 'Chewy and delicious bagel', price: 2, image: 'https://plus.unsplash.com/premium_photo-1688385990573-7cda22631e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFndWV0dGV8ZW58MHx8MHx8fDA%3D' },

    { name: 'Baguette', description: 'Crusty and soft baguette', price: 4, image: 'https://media.istockphoto.com/id/493161146/photo/toasted-bagel-with-cream-cheese-at-your-desk.jpg?s=2048x2048&w=is&k=20&c=wlkBeV4aj2M-VfxlniPEvefzIf4mKWzX9OoqN72zfwg=' },

    { name: 'Croissant', description: 'Flaky and buttery croissant', price: 3, image: 'https://images.unsplash.com/photo-1691480162735-9b91238080f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENyb2lzc2FudCUyMEZsYWt5JTIwYW5kJTIwYnV0dGVyeSUyMGNyb2lzc2FudHxlbnwwfHwwfHx8MA%3D%3D' },

    { name: 'Bagel', description: 'Chewy and delicious bagel', price: 2, image: 'https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFnZWx8ZW58MHx8MHx8fDA%3D' },

    { name: 'Baguette', description: 'Crusty and soft baguette', price: 4, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFndWV0dGV8ZW58MHx8MHx8fDA%3D' }

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
