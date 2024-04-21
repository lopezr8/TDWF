import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ImageModule } from 'primeng/image';


interface img {
  url: string;
  description: string;
}

@Component({
  selector: 'app-main-carrusel',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule,
    ImageModule
  ],
  templateUrl: './mainCarrusel.component.html',
  styleUrl: './mainCarrusel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCarruselComponent {

  private URL = './assets/tdr'


  images:img[] = [
    {url: `${this.URL}/3b.jpg`, description: 'Servicios Profesionales de Decoración y Revestimiento'},
    {url: `${this.URL}/2b.jpg`, description: 'Expertos en Acabados: Estucos, Pintura y Texturizados'},
    {url: `${this.URL}/1b.jpg`, description: 'Calidad en Cada Detalle' },

  {url: `${this.URL}/4b.jpg`, description: 'Garantía y Seguridad'},
  {url: `${this.URL}/5b.jpg` , description: 'Durabilidad Garantizada'}  ];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
 }
