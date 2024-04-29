import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainCarruselComponent } from "../../../components/portafolioComponents/portafolio01/mainCarrusel.component";

@Component({
    selector: 'app-portafolio01',
    standalone: true,
    templateUrl: './portafolio01.component.html',
    styleUrl: './portafolio01.component.scss',
    imports: [
        RouterModule,
        MainCarruselComponent
    ]
})
export class Portafolio01Component {

}
