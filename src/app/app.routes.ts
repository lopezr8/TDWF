import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/homePage/homePage.component';
<<<<<<< HEAD
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
=======
import { ServicePageComponent } from './pages/servicePage/servicePage.component';
>>>>>>> 65404ba (servicios Page)

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
<<<<<<< HEAD
    { path: 'portafolio', component: PortafolioComponent},
=======
    { path: 'services', component: ServicePageComponent },
>>>>>>> 65404ba (servicios Page)

];
