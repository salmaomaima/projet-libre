import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuComponent } from '../../composant/menu/menu.component';
import { HeaderComponent } from '../../composant/header/header.component';
import { NgModule } from '@angular/core';
import { PaginationComponent } from '../../composant/pagination/pagination.component';
import { BouttonActionComponent } from '../../composant/boutton-action/boutton-action.component';
// import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';
// import {ClientDto} from '../../../../gs-api/src/models/client-dto';
import { AnalyseControllerService } from '../../../gs-api/sr/services';
import { Analyse } from '../../../gs-api/sr/models';
import { HttpClientModule } from '@angular/common/http';
import { NouvAnalyseComponent } from '../../composant/nouv-analyse/nouv-analyse.component';
import { DetailCltFrsComponent } from '../../composant/detail-clt-frs/detail-clt-frs.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-page-analyse',
  templateUrl: './page-analyse.component.html',
  styleUrls: ['./page-analyse.component.scss'],
  standalone: true,
  imports: [CommonModule ,DetailCltFrsComponent,HttpClientModule,MenuComponent,HeaderComponent,PaginationComponent,BouttonActionComponent, FormsModule],
})



export class PageAnalyseComponent implements OnInit {
  listAnalyse: Analyse[] = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private analyseService: AnalyseControllerService,
   
  ) {}

  ngOnInit(): void {
    this.getAllAnalyses();
  }

  getAllAnalyses(): void {
    this.analyseService.getAllAnalyses()
      .subscribe({
        next: (analyses) => {
          this.listAnalyse = analyses;
        },
        error: (error) => {
          this.errorMsg = 'Erreur lors de la récupération des analyses.';
          console.error(error);
        }
      });
  }

  
  actualiserListe(): void {
    // Actualiser la liste des laboratoires (par exemple en la récupérant à nouveau)
    this.analyseService.getAllAnalyses().subscribe(
      (analyses) => {
        this.listAnalyse = analyses;
      },
      (error) => {
        console.error('Erreur lors de la récupération des analyses', error);
      }
    );
  }

  nouvanalyse(): void {
    this.router.navigate(['nouvAnalyse']);
  }
}