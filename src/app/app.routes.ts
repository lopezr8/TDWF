import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { Portafolio01Component } from './pages/portafolioPages/portafolio01/portafolio01.component';
import { Portafolio02Component } from './pages/portafolioPages/portafolio02/portafolio02.component';
import { Portafolio03Component } from './pages/portafolioPages/portafolio03/portafolio03.component';
import { Portafolio04Component } from './pages/portafolioPages/portafolio04/portafolio04.component';

import { ServicePageComponent } from './pages/servicePage/servicePage.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'portafolio', component: PortafolioComponent},
    { path: 'services', component: ServicePageComponent },
    { path: 'portafolio01', component: Portafolio01Component},
    { path: 'portafolio02', component: Portafolio02Component},
    { path: 'portafolio03', component: Portafolio03Component},
    { path: 'portafolio04', component: Portafolio04Component},


];
