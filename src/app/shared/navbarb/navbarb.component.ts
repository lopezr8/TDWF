import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TDRComponent } from '../TDR/TDR.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbarb',
  standalone: true,
  imports: [
    CommonModule,
    TDRComponent,
    NgbCollapseModule
  ],
  templateUrl: './navbarb.component.html',
  styleUrl: './navbarb.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarbComponent {
  isMenuCollapsed = true;
}
