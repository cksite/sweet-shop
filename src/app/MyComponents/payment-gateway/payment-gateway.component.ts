import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment-gateway',
    standalone: true,
    templateUrl: './payment-gateway.component.html',
    styleUrl: './payment-gateway.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class PaymentGatewayComponent {
    
}
