import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TDRComponent } from '../TDR/TDR.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbarb',
  standalone: true,
  imports: [
    CommonModule,
    TDRComponent,
    NgbCollapseModule,
    RouterModule
  ],
  templateUrl: './navbarb.component.html',
  styleUrl: './navbarb.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarbComponent {
  isMenuCollapsed = true;
}
