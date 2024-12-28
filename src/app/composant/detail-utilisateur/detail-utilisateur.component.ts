import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrl: './detail-utilisateur.component.scss',
    standalone: true,
      imports: [CommonModule, RouterModule]
})
export class DetailUtilisateurComponent {

}
