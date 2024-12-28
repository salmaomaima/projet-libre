import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuComponent } from '../../composant/menu/menu.component';
import { HeaderComponent } from '../../composant/header/header.component';
import { PaginationComponent } from '../../composant/pagination/pagination.component';
import { BouttonActionComponent } from '../../composant/boutton-action/boutton-action.component';
import { DetailUtiliComponent } from '../../composant/detail-utili/detail-utili.component';
import { UtilisateurDto } from '../../../gs-api/src/models';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
// import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';
// import {ClientDto} from '../../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss'],
  standalone: true,
  imports: [CommonModule ,HttpClientModule,MenuComponent,HeaderComponent,PaginationComponent,BouttonActionComponent,DetailUtiliComponent],
})
export class PageUtilisateurComponent implements OnInit {
  listAnalyse: any[] = [
    { id: 1, name: 'utilisateur1', email: 'client1@example.com' },
    { id: 2, name: 'utilisateur2', email: 'client2@example.com' },
  ];
  listusers: Array<UtilisateurDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.findAllusers();
   }

   findAllusers(): void {
    const token = localStorage.getItem('access_token'); // Retrieve token from localStorage
    console.log('Token:', token); // Check the token

    if (token) {
      this.userService.findAllusers(token).subscribe(
        (users: any[]) => {
          this.listusers = users;
        },
        (error: any) => {
          console.error('Error fetching users:', error);
        }
      );
    } else {
      console.error('No token found!');
    }
  }

  nouvutili(): void {
    this.router.navigate(['nouvutili']);
  }

  // handleSuppression(event: any): void {
  //   if (event === 'success') {
  //     this.findAllClients();
  //   } else {
  //     this.errorMsg = event;
  //   }
  // }
}
