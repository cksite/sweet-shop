import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignUpPageComponent } from "./MyComponents/sign-up-page/sign-up-page.component";
import { LoginPageComponent } from "./MyComponents/login-page/login-page.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { HomePageComponent } from "./MyComponents/home-page/home-page.component";
import { FooterComponent } from "./MyComponents/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SignUpPageComponent, LoginPageComponent, NavbarComponent, HomePageComponent, FooterComponent]
})
export class AppComponent {
  title = 'sweet-spot';
}
