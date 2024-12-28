import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuComponent } from '../../composant/menu/menu.component';
import { HeaderComponent } from '../../composant/header/header.component';
import { PaginationComponent } from '../../composant/pagination/pagination.component';
import { BouttonActionComponent } from '../../composant/boutton-action/boutton-action.component';
import { DetailUtiliComponent } from '../../composant/detail-utili/detail-utili.component';
import { DetailLaboComponent } from '../../composant/detail-labo/detail-labo.component';
// import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';
// import {ClientDto} from '../../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-page labo',
  templateUrl: './page labo.component.html',
  styleUrls: ['./page labo.component.scss'],
  standalone: true,
  imports: [CommonModule ,MenuComponent,HeaderComponent,PaginationComponent,BouttonActionComponent,DetailLaboComponent],
})
export class PageLaboComponent  implements OnInit {
  listLabo: any[] = [
    { id: 1, name: 'utilisateur1', email: 'client1@example.com' },
    { id: 2, name: 'utilisateur2', email: 'client2@example.com' },
  ];
  // listClient: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    // private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
  //   this.findAllClients();
   }

  // findAllClients(): void {
  //   this.cltFrsService.findAllClients()
  //   .subscribe(clients => {
  //     this.listClient = clients;
  //   });
  // }

  nouvLabo(): void {
    this.router.navigate(['labo']);
  }

  // handleSuppression(event: any): void {
  //   if (event === 'success') {
  //     this.findAllClients();
  //   } else {
  //     this.errorMsg = event;
  //   }
  // }
}
