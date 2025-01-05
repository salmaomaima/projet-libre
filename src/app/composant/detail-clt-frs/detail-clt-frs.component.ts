import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {ClientDto} from '../../../gs-api/src/models/client-dto';
import {Router, RouterModule} from '@angular/router';
// import {CltfrsService} from '../../services/cltfrs/cltfrs.service';
import { Analyse } from '../../../gs-api/sr/models';
import { AnalyseControllerService } from '../../../gs-api/sr/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss'],
    standalone: true,
      imports: [CommonModule, RouterModule],
      animations: [
        trigger('state', [
          state('done', style({ opacity: 1 })),
          transition('* => done', [
            animate('0.5s')
          ])
        ])
      ]
     
    })
export class DetailCltFrsComponent implements OnInit {
  listAnalyse: Analyse[] = [];
  errorMsg = '';
  @Input()
  Analyse!: Analyse;
   origin = '';
  @Input()
  clientFournisseur: any = {};
  @Output()
  suppressionResult = new EventEmitter();
  @Output() Analyser = new EventEmitter<void>();

  constructor(
    private router: Router,
    private analyseService: AnalyseControllerService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
        
    // private cltFrsService: CltfrsService
  ) { }

  

  ngOnInit(): void {
    this.getAllAnalyses();
  }

  getAllAnalyses(): void {
    this.analyseService.getAllAnalyses().subscribe({
      next: (analyses) => {
        this.listAnalyse = analyses;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des analyses :', error);
      }
    });
  }

  deleteAnalyse(id: number | undefined): void {
    if (!id) {
      console.error('ID is missing');
      return;
    }
  
    this.analyseService.deleteAnalyse(id).subscribe({
      next: () => {
        // Créez une nouvelle référence pour la liste
        this.listAnalyse = this.listAnalyse.filter(analyse => analyse.id !== id);
        console.log('Liste après suppression :', this.listAnalyse); // Vérifiez la liste
        this.cdr.detectChanges(); // Forcer la détection des changements
        console.log('Analyse supprimée avec succès');
        this.Analyser.emit();
        this.router.navigate(['analyse', this.Analyse.id]);
        
      },
      error: (error) => {
        console.error('Erreur lors de la suppression :', error);
      }
    });
  }
  
  
  onSubmit(): void {
    if (this.Analyse.id) {
      this.analyseService.updateAnalyse(this.Analyse.id, this.Analyse).subscribe({
        next: (updatedAnalyse) => {
          console.log('Analyse mise à jour avec succès :', updatedAnalyse);
          this.router.navigate(['nouvAnalyse']); // Redirigez vers la liste ou une autre page
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour :', err);
        }
      });
    }
  }
  onSubmit2(): void {
    if (this.Analyse.id) {
      this.router.navigate(['nouvAnalyse', this.Analyse.id]);
    }
  }
  

  // modifierClientFournisseur(): void {
  //   if (this.origin === 'client') {
  //     this.router.navigate(['nouvclient', this.clientFournisseur.id]);
  //   } else if (this.origin === 'fournisseur') {
  //     this.router.navigate(['nouvfournisseur', this.clientFournisseur.id]);
  //   }
  // }

  // confirmerEtSupprimer(): void {
  //   if (this.origin === 'client') {
  //     this.cltFrsService.deleteClient(this.clientFournisseur.id)
  //     .subscribe(res => {
  //       this.suppressionResult.emit('success');
  //     }, error => {
  //       this.suppressionResult.emit(error.error.error);
  //     });
  //   } else if (this.origin === 'fournisseur') {
  //     this.cltFrsService.deleteFournisseur(this.clientFournisseur.id)
  //     .subscribe(res => {
  //       this.suppressionResult.emit('success');
  //     }, error => {
  //       this.suppressionResult.emit(error.error.error);
  //     });
  //   }
  // }
}
