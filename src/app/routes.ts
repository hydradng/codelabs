import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },
    { 
        path: '**',
        component: PageNotFoundComponent, // Wildcard route for a 404 page
        title: 'Page not found' 
    },  

];

export default routeConfig;