import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarbComponent } from './shared/navbarb/navbarb.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarbComponent,
    HeaderComponent,
    FooterComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TDWF';

  location = inject(Location)

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
      if( titlee === '/home' ) {
          return true;
      }
      else {
          return false;
      }
  }
}
