import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, signal } from '@angular/core';

@Component({
    selector: 'app-tdr',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './TDR.component.html',
    styleUrls: ['./TDR.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TDRComponent{

  cssAnimated = signal<string>('');

  @ViewChild( 'header' )    public header!: ElementRef<HTMLTitleElement>;

  mouseOver(){
    this.cssAnimated.set('animate__animated animate__pulse');

    this.header.nativeElement.addEventListener('animationend', () => {
      console.log('paso')
      this.cssAnimated.set('');
    })
  }





}
