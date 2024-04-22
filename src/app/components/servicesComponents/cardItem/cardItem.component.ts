import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface description {
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cardItem.component.html',
  styleUrl: './cardItem.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {

  @Input({required: true}) even!: boolean ;

  @Input({required: true}) title!: string ;
  @Input({required: true}) image!: string ;

  @Input({required: true}) descriptions!: description[] ;


}