import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>

        <input type="text" placeholder="Filter by name " #filterN />
        <button class="primary" type="button" (click)="filterByName(filterN.value)">Search</button>
      </form>
    </section>


    <section>
      <section class="results">
        <app-housing-location *ngFor="let housingLocation of filteredLocationList" 
        [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,

  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  filteredLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }


  filterByName(text: string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.name.toLowerCase().includes(text.toLowerCase()),
    );

  }

}
