import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout-page',
    standalone: true,
    templateUrl: './checkout-page.component.html',
    styleUrl: './checkout-page.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class CheckoutPageComponent {
    constructor(private router: Router) { }
    redirectToPayment() {
    this.router.navigate(['/payment']);
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }
}

