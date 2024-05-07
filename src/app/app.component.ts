import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarbComponent } from './shared/navbarb/navbarb.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';

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
}
