import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarruselComponent } from '../../components/homecomponents/mainCarrusel/mainCarrusel.component';
import { BeutifulCountersComponent } from '../../components/homecomponents/beutifulCounters/beutifulCounters.component';
import { ServicesComponent } from '../../components/homecomponents/services/services.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MainCarruselComponent,
    BeutifulCountersComponent,
    ServicesComponent
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }

