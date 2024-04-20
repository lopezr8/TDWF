import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ImageModule } from 'primeng/image';

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

  private URL = '../../../assets/tdr'


  images:string[] = [ `${this.URL}/1.jpg`,`${this.URL}/2.jpg`,`${this.URL}/3.jpg`,`${this.URL}/4.jpg`,`${this.URL}/5.png`   ];

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