import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from "../AssetComponents/card/card.component";
import { BannerComponent } from "../AssetComponents/banner/banner.component";
import { FactComponent } from "../AssetComponents/fact/fact.component";
import { HomeFrontComponent } from "../AssetComponents/home-front/home-front.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [NavbarComponent, FooterComponent, CardComponent, BannerComponent, FactComponent, HomeFrontComponent]
})
export class HomePageComponent {

}
