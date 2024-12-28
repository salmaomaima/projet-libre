import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComposantAcceuilComponent } from '../../composant/composant-acceuil/composant-acceuil.component';

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [CommonModule ,ComposantAcceuilComponent],
  templateUrl: './page-acceuil.component.html',
  styleUrl: './page-acceuil.component.css'
})
export class PageAcceuilComponent {

}
