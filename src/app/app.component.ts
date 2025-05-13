import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['']" (click)="OnLogoClick()"> 
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
        <!-- <app-home></app-home> -->
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "homes";

  // Another test is to use params in url and populate that param from an input box
  // Look into ngOnInit and subscribe()
  OnLogoClick(){
    console.log ('Logo clicked')
  }
}
