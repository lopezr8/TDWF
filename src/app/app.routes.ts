import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'portafolio', component: PortafolioComponent},

];
