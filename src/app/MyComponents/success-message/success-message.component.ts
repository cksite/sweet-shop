import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-success-message',
    standalone: true,
    templateUrl: './success-message.component.html',
    styleUrl: './success-message.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class SuccessMessageComponent {

}
