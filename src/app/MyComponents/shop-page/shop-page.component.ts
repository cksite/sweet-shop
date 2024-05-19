import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from "../AssetComponents/card/card.component";

@Component({
    selector: 'app-shop-page',
    standalone: true,
    templateUrl: './shop-page.component.html',
    styleUrl: './shop-page.component.css',
    imports: [NavbarComponent, FooterComponent, CardComponent]
})
export class ShopPageComponent {

}
