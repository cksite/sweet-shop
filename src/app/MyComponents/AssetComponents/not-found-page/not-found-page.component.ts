import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-not-found-page',
    standalone: true,
    templateUrl: './not-found-page.component.html',
    styleUrl: './not-found-page.component.css',
    imports: [FooterComponent, NavbarComponent]
})
export class NotFoundPageComponent {

}
