import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';


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
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
    public services : service[] = [
      {title:'ESTUCOS', description: ' Tradicional - Plásticos - Venecianos', image: './assets/tdr/icons/1.svg'},
      {title:'PINTURA', description: ' Vinilo - Epoxica - Trafijo - Señalización', image: './assets/tdr/icons/2.svg'},
      {title:'SISTEMA DE REVOQUE', description: ' en Seco o Estampillado', image: './assets/tdr/icons/5.svg'},
      {title:'PAREDES', description: ' en Panel de Yeso - Fibrocemento', image: './assets/tdr/icons/8.svg'},
      {title:'CIELO RASO', description: ' en Panel de Yeso - Fibrocemento PVC', image: './assets/tdr/icons/10.svg'},
     ]

 }
