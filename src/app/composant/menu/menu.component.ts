import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Menu {
  id: string;
  titre: string;
  icon: string;
  url: string;
  active?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Profil',
      icon: 'fas fa-chart-line',
      url: 'profil'
    },
    {
      id: '2',
      titre: 'Analyses',
      icon: 'fas fa-boxes',
      url: 'analyse'
    },
    {
      id: '3',
      titre: 'Utilisateurs',
      icon: 'fas fa-users',
      url: 'utilisateur'
    },
    {
      id: '4',
      titre: 'Laboratoires',
      icon: 'fas fa-users',
      url: 'laboratoire'
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: ''
    }
  ];

  private lastSelectedMenu: Menu | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;

    if (menu.url) {
      this.router.navigate([menu.url]);
    }
  }

  toggleCollapse(menu: Menu): void {
    // Cette méthode gère l'ouverture et la fermeture du menu
    menu.active = !menu.active;
  }
}
