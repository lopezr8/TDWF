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

export class ServicePageComponent {
  services: Service[] =  [
    {title:'ESTUCOS', descriptions: [ {title: 'Tradicional' , description: 'Técnica clásica que utiliza cal, arena y agua para crear una superficie duradera y elegante.'} , {title: 'Plásticos' , description: 'Alternativa moderna al estuco tradicional, utiliza resinas sintéticas para una aplicación fácil y resistencia al agua.'} , {title: ' Venecianos', description: 'Técnica decorativa de origen veneciano, emplea capas delgadas de yeso para un acabado brillante y sofisticado.'} ]  , image: './assets/tdr/1.jpg'},
    {title:'PINTURA', descriptions: [
      {
        "title": "Vinilo",
        "description": "Tipo de pintura versátil y resistente, ideal para aplicaciones en interiores y exteriores. Ofrece una amplia gama de colores y un acabado duradero."
      },
      {
        "title": "Epoxica",
        "description": "Pintura de alta resistencia que utiliza resinas epoxi para crear una superficie dura y duradera. Es ideal para suelos y superficies expuestas a condiciones severas."
      },
      {
        "title": "Trafijo",
        "description": "Pintura especializada diseñada para señalización vial y marcado de carreteras. Proporciona una alta visibilidad y resistencia a la abrasión, garantizando la seguridad vial."
      },
      {
        "title": "Señalización",
        "description": "Pintura utilizada para señalización en interiores y exteriores, como marcas en pisos, paredes y equipos. Ofrece una excelente adherencia y visibilidad para comunicar mensajes importantes."
      }
    ]  , image: './assets/tdr/1.jpg'},
   {title:'PAREDES', descriptions: [
    {
      "title": "Panel de Yeso",
      "description": "Pintura diseñada específicamente para aplicarse en paredes de panel de yeso o drywall. Proporciona una cobertura uniforme y un acabado suave en superficies interiores."
    },
    {
      "title": "Fibrocemento",
      "description": "Pintura especialmente formulada para paredes de fibrocemento, un material duradero y resistente al agua. Ofrece una protección efectiva contra la humedad y los elementos exteriores."
    }
  ], image: './assets/tdr/1.jpg'},
   {title: `SISTEMA DE REVOQUE`, descriptions: [
    {
      "title": "Seco",
      "description": "Pintura diseñada para aplicarse en sistemas de revoque en seco, como el sistema de construcción en seco o drywall. Proporciona una capa protectora y decorativa sobre la superficie del revoque."
    },
    {
      "title": "Estampillado",
      "description": "Pintura especialmente formulada para aplicarse en sistemas de revoque estampillado. Ofrece una amplia variedad de colores y acabados para crear efectos decorativos únicos en las paredes."
    }
  ] , image: './assets/tdr/1.jpg'},
   {title:'CIELO RASO', descriptions: [
    {
      "title": "Panel de Yeso",
      "description": "Pintura especialmente diseñada para aplicarse en cielos rasos de panel de yeso o drywall. Proporciona una cobertura uniforme y un acabado suave en superficies interiores."
    },
    {
      "title": "Fibrocemento",
      "description": "Pintura formulada para cielos rasos de fibrocemento, un material resistente y duradero. Ofrece protección contra la humedad y los elementos exteriores, manteniendo una apariencia estética."
    },
    {
      "title": "PVC",
      "description": "Pintura adecuada para cielos rasos de PVC, un material ligero y fácil de limpiar. Proporciona una capa protectora y decorativa que resalta la apariencia del cielo raso y ofrece resistencia a la humedad."
    }
  ], image: './assets/tdr/1.jpg'},
   {title:'MUROS', descriptions: [
    {
      "title": "Panel de Yeso",
      "description": "Pintura diseñada específicamente para aplicarse en muros de panel de yeso o drywall. Proporciona una cobertura uniforme y un acabado suave en superficies interiores, ideal para proyectos de construcción en interiores."
    },
    {
      "title": "Fibrocemento",
      "description": "Pintura formulada para muros de fibrocemento, un material resistente y duradero. Ofrece protección contra la humedad y los elementos exteriores, manteniendo una apariencia estética en aplicaciones tanto interiores como exteriores."
    }
  ], image: './assets/tdr/1.jpg'},
       {title:'ENTREPISOS', descriptions: [
        {
          "title": "Fibrocemento",
          "description": "Pintura especialmente formulada para aplicarse en entrepisos de fibrocemento. Este tipo de pintura proporciona una capa protectora y decorativa para los entrepisos, ofreciendo resistencia a la humedad y durabilidad para mantener un aspecto estético en el tiempo."
        }
      ], image: './assets/tdr/1.jpg'},
       {title:'AISLAMIENTO', descriptions: [
        {
          "title": "Aislamiento Acústico",
          "description": "El aislamiento acústico es un material diseñado para reducir la transmisión de sonido entre espacios. Puede ser utilizado en paredes, techos y pisos para minimizar el ruido y mejorar la privacidad en interiores. Este tipo de aislamiento absorbe, bloquea o refleja el sonido, contribuyendo a crear ambientes más tranquilos y confortables."
        },
        {
          "title": "Aislamiento Térmico",
          "description": "El aislamiento térmico es un material que ayuda a controlar la transferencia de calor entre el interior y el exterior de un edificio. Se utiliza para mantener una temperatura confortable en el interior, reduciendo la pérdida de calor en invierno y el ingreso de calor en verano. Este tipo de aislamiento puede instalarse en paredes, techos, pisos y ventanas para mejorar la eficiencia energética y reducir los costos de calefacción y refrigeración."
        }
      ], image: './assets/tdr/1.jpg'},
       {title:'TEXTURAS', descriptions: [
        {
          "title": "Graniplast",
          "description": "Graniplast es un revestimiento texturizado utilizado para crear efectos decorativos en superficies interiores y exteriores. Está compuesto por partículas de mármol y cuarzo que proporcionan una textura única y resistente. Graniplast se aplica con una llana o espátula y luego se puede texturizar con diferentes técnicas para lograr el efecto deseado, como el estucado, el lijado o el cepillado. Este material es duradero, resistente a la intemperie y fácil de mantener, lo que lo hace ideal para proyectos de decoración y renovación."
        }
      ], image: './assets/tdr/1.jpg'},
       {title:'TRABAJOS EN ALTURAS', descriptions: [
        {
          "title": "¿Que implica?",
          "description": "cualquier actividad realizada a una altura considerable sobre el suelo, como en andamios, plataformas elevadas, escaleras, techos o estructuras elevadas. Este tipo de trabajo puede incluir tareas de construcción, mantenimiento, reparación o instalación que requieren acceso a áreas elevadas. Es crucial seguir estrictas medidas de seguridad, como el uso de arneses de seguridad, barandillas, redes de protección y capacitación adecuada para prevenir caídas y minimizar los riesgos para la salud y la seguridad de los trabajadores."
        }
      ]
       , image: './assets/tdr/1.jpg'},
  ];

}
