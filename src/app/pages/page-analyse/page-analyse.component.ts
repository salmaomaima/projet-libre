import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuComponent } from '../../composant/menu/menu.component';
import { HeaderComponent } from '../../composant/header/header.component';
import { PaginationComponent } from '../../composant/pagination/pagination.component';
import { BouttonActionComponent } from '../../composant/boutton-action/boutton-action.component';
import { DetailCltFrsComponent } from '../../composant/detail-clt-frs/detail-clt-frs.component';
// import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';
// import {ClientDto} from '../../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-page-analyse',
  templateUrl: './page-analyse.component.html',
  styleUrls: ['./page-analyse.component.scss'],
  standalone: true,
  imports: [CommonModule ,MenuComponent,HeaderComponent,PaginationComponent,BouttonActionComponent,DetailCltFrsComponent],
})
export class PageAnalyseComponent implements OnInit {
  listAnalyse: any[] = [
    { id: 1, name: 'Analyse1', email: 'client1@example.com' },
    { id: 2, name: 'Analyse2', email: 'client2@example.com' },
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

  nouvanalyse(): void {
    this.router.navigate(['nouvAnalyse']);
  }

  // handleSuppression(event: any): void {
  //   if (event === 'success') {
  //     this.findAllClients();
  //   } else {
  //     this.errorMsg = event;
  //   }
  // }
}
