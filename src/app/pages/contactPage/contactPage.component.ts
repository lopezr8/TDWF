import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactCardItemComponent } from '../../components/contactComponents/contactCardItem/contactCardItem.component';
import { MapComponentComponent } from "../../components/contactComponents/mapComponent/mapComponent.component";

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibG9wZXpyOCIsImEiOiJjbHRmMml3NDkwNXhwMmlwbGd6NGdycWdkIn0.7iS4r3AIPhwDW4ryrASayg';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    templateUrl: './contactPage.component.html',
    styleUrl: './contactPage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ContactCardItemComponent,
        MapComponentComponent
    ]
})
export class ContactPageComponent { }
