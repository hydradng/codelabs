import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <img class="listing">
      <h2 class ="liting-heading"></h2>
      <p class="listing-location"></p>

    </section>


  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

}
