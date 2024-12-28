import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuComponent } from '../../../composant/menu/menu.component';
import { HeaderComponent } from '../../../composant/header/header.component';
//import { CategoriesService } from '../../../../gs-api/src/services';
//import { ChangerMotDePasseUtilisateurDto } from '../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';
//import { UserService } from '../../../services/user/user.service';
// import {ChangerMotDePasseUtilisateurDto} from '../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';
// import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss'],
  standalone: true,
  imports: [CommonModule ,MenuComponent,HeaderComponent]
})
export class ChangerMotDePasseComponent implements OnInit {

  // changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  // ancienMotDePasse = '';

  constructor(
    private router: Router
    // private utili :CategoriesService,
    // private userService: UserService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.utili.findAll()
  //   .subscribe(res =>{});
  //   if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
  //     this.ancienMotDePasse = 'som3R@nd0mP@$$word';
  //   //   localStorage.removeItem('origin');
  //    }
  // }

  cancel(): void {
    this.router.navigate(['profil']);
  }


  // changerMotDePasseUtilisateur(): void {
  //   this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
  //   this.userService.changerMotDePasse(this.changerMotDePasseDto)
  //   .subscribe(data => {
  //     // rien faire
  //     this.router.navigate(['profil']);
  //   });
  // }
}
