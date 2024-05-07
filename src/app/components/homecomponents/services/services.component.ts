import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface service {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
    public services : service[] = [
      {title:'ESTUCOS', description: ' Tradicional - Plásticos - Venecianos', image: './assets/tdr/icons/5.svg'},
      {title:'PINTURA', description: ' Vinilo - Epoxica - Trafijo - Señalización', image: './assets/tdr/icons/2.svg'},
      //{title:'PAREDES', description: ' en Panel de Yeso - Fibrocemento', image: './assets/tdr/icons/8.svg'},
      {title: `SISTEMA\n
      DE REVOQUE`, description: ' en Seco o Estampillado', image: './assets/tdr/icons/19.svg'},
      {title:'CIELO RASO', description: ' en Panel de Yeso - Fibrocemento PVC', image: './assets/tdr/icons/10.svg'},
      {title:'MUROS', description: 'Panel yeso - Fibrocemento', image: './assets/tdr/icons/20.svg'},
      {title:'ENTREPISOS', description: 'en       Fibrocemento ', image: './assets/tdr/icons/12.svg'},
      {title:'AISLAMIENTO', description: 'Acústico y Térmicos', image: './assets/tdr/icons/13.svg'},
      {title:'TEXTURAS', description: 'Graniplast', image: './assets/tdr/icons/14.svg'},
      {title:'TRABAJOS EN ALTURAS', description: 'a ciertas alturas o en situaciones elevadas', image: './assets/tdr/icons/18.svg'},
     ]

 }
