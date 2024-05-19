import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { PageHeaderComponent } from "../AssetComponents/page-header/page-header.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [NavbarComponent, FooterComponent, PageHeaderComponent]
})
export class CartPageComponent {
    constructor(private router: Router) { }
    redirectToCheckout() {
    this.router.navigate(['checkout']);
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }

}
