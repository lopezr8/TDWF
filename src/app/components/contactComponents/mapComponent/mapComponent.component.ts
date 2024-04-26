import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';


import { Map, Marker} from 'mapbox-gl'



@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mapComponent.component.html',
  styleUrl: './mapComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponentComponent {

  @ViewChild('map') public divMap?: ElementRef;
  public lngLat?: [number, number] = [-77.2925053806278, 1.203764103582767];
  public map?: Map;
  public marker?: Marker;



  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) throw "Map Div not found";
    if (!this.lngLat) throw "LngLat can't be null";

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: this.lngLat,
      zoom: 17.5,
      interactive: false
    });

    this.marker = new Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map);


    if (this.marker && this.marker.getElement()) {
      const markerElement = this.marker.getElement();
      markerElement.style.position = 'absolute';
      markerElement.style.top = '10%';
      markerElement.style.left = '1%';
      markerElement.style.transform = 'translate(-50%, -50%)';
    }
  }

}
