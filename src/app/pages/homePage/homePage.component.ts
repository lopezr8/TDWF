import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarruselComponent } from '../../components/mainCarrusel/mainCarrusel.component';
import { BeutifulCountersComponent } from '../../components/beutifulCounters/beutifulCounters.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MainCarruselComponent,
    BeutifulCountersComponent
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }

