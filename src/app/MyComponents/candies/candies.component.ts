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
    { name: 'Gummy Bears', description: 'Chewy gummy bears in various flavors', price: 5, image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3VtbXklMjBCZWFyc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Chocolate Truffles', description: 'Rich chocolate truffles', price: 15, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwVHJ1ZmZsZXN8ZW58MHx8MHx8fDA%3D' },
    { name: 'Candy Canes', description: 'Classic peppermint candy canes', price: 3, image: 'https://images.unsplash.com/photo-1577116752660-260aab3ee0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FuZHklMjBDYW5lc3xlbnwwfHwwfHx8MA%3D%3D' },

    
    { name: 'Gummy Bears', description: 'Chewy gummy bears in various flavors', price: 5, image: 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R3VtbXklMjBCZWFyc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Chocolate Truffles', description: 'Rich chocolate truffles', price: 15, image: 'https://images.unsplash.com/photo-1549007860-1927001d0502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENob2NvbGF0ZSUyMFRydWZmbGVzfGVufDB8fDB8fHww' },
    { name: 'Candy Canes', description: 'Classic peppermint candy canes', price: 3, image: 'https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FuZHklMjBDYW5lcyUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D' },

    { name: 'Gummy Bears', description: 'Chewy gummy bears in various flavors', price: 5, image: 'https://images.unsplash.com/photo-1635342219731-4ae2bf39e1e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3VtbXklMjBCZWFyc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Chocolate Truffles', description: 'Rich chocolate truffles', price: 15, image: 'https://images.unsplash.com/photo-1591962291915-b2d4d450bf6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENob2NvbGF0ZSUyMFRydWZmbGVzfGVufDB8fDB8fHww' },
    { name: 'Candy Canes', description: 'Classic peppermint candy canes', price: 3, image: 'https://images.unsplash.com/photo-1633158832466-be592c721217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhbmR5JTIwQ2FuZXMlMjBjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D' }


  ];

  constructor() { }

  ngOnInit(): void {
  }
}
