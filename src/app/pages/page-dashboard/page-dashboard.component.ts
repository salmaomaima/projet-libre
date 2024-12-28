import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../../composant/menu/menu.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../composant/header/header.component';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss',
  standalone: true,
  imports: [CommonModule ,MenuComponent, RouterModule,HeaderComponent],
})
export class PageDashboardComponent {
 constructor(
     private router: Router
   ) { }
}
