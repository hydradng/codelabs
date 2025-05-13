import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      PAGE NOT FOUND, Try a different link
    </p>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

}
