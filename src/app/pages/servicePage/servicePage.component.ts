import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItemComponent, description } from '../../components/servicesComponents/cardItem/cardItem.component';

interface Service {
  title: string;
  descriptions: description[];
  image: string;

}

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    CommonModule,
    CardItemComponent
  ],
  templateUrl: './servicePage.component.html',
  styleUrl: './servicePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//todo: el boton cotizar debe mandar a contact
export class ServicePageComponent {
  services: Service[] =  [
    {title:'ESTUCOS', descriptions:
    [ {title: '• Tradicional.' , description: ''} , {title: '• Plásticos.' , description: ''} , {title: '• Venecianos.', description: ''} ]  , image: './assets/tdr/services/12.JPG'},
    {title:'PINTURA', descriptions: [
      {
        "title": "• Vinilo.",
        "description": ""
      },
      {
        "title": "• Epoxica.",
        "description": ""
      },
      {
        "title": "• Trafijo.",
        "description": ""
      },
      {
        "title": "• Señalización.",
        "description": ""
      }
    ]  , image: './assets/tdr/services/1.jpg'},
   {title:'PAREDES', descriptions: [
    {
      "title": "• Panel de Yeso.",
      "description": ""
    },
    {
      "title": "• Fibrocemento.",
      "description": ""
    }
  ], image: './assets/tdr/services/5.jpg'},
   {title: `SISTEMA DE REVOQUE`, descriptions: [
    {
      "title": "• Seco.",
      "description": ""
    },
    {
      "title": "• Estampillado.",
      "description": ""
    }
  ] , image: './assets/tdr/services/14.jpg'},
   {title:'CIELO RASO', descriptions: [
    {
      "title": "• Panel de Yeso.",
      "description": ""
    },
    {
      "title": "• Fibrocemento.",
      "description": ""
    },
    {
      "title": "• PVC.",
      "description": ""
    }
  ], image: './assets/tdr/services/2.jpg'},
   {title:'MUROS', descriptions: [
    {
      "title": "• Panel de Yeso.",
      "description": ""
    },
    {
      "title": "• Fibrocemento.",
      "description": ""
    }
  ], image: './assets/tdr/services/4.jpg'},
       {title:'ENTREPISOS', descriptions: [
        {
          "title": "• Fibrocemento.",
          "description": ""
        }
      ], image: ''},
       {title:'AISLAMIENTO', descriptions: [
        {
          "title": "• Aislamiento Acústico.",
          "description": ""
        },
        {
          "title": "• Aislamiento Térmico.",
          "description": ""
        }
      ], image: './assets/tdr/services/15.jpg'},
       {title:'TEXTURAS', descriptions: [
        {
          "title": "• Graniplast.",
          "description": ""
        }
      ], image: './assets/tdr/services/16.jpg'},
       {title:'TRABAJOS EN ALTURAS', descriptions: [
        {
          "title": "¿Que implica?",
          "description": "cualquier actividad realizada a una altura considerable sobre el suelo, como en andamios, plataformas elevadas, escaleras, techos o estructuras elevadas. Este tipo de trabajo puede incluir tareas de construcción, mantenimiento, reparación o instalación que requieren acceso a áreas elevadas. Es crucial seguir estrictas medidas de seguridad, como el uso de arneses de seguridad, barandillas, redes de protección y capacitación adecuada para prevenir caídas y minimizar los riesgos para la salud y la seguridad de los trabajadores."
        }
      ]
       , image: './assets/tdr/services/6.jpg'},
  ];

}
