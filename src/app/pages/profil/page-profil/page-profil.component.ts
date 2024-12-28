import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuComponent } from '../../../composant/menu/menu.component';
import { HeaderComponent } from '../../../composant/header/header.component';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss'],
  standalone: true,
  imports: [CommonModule ,MenuComponent,HeaderComponent],
})
export class PageProfilComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }
}
