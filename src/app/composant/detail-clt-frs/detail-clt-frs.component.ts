import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {ClientDto} from '../../../gs-api/src/models/client-dto';
import {Router, RouterModule} from '@angular/router';
// import {CltfrsService} from '../../services/cltfrs/cltfrs.service';
import { Analyse } from '../../../gs-api/sr/models';
import { AnalyseControllerService } from '../../../gs-api/sr/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, transition, animate } from '@angular/animations';
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

  constructor(
    private router: Router,
    private analyseService: AnalyseControllerService,
    private snackBar: MatSnackBar,
        
    // private cltFrsService: CltfrsService
  ) { }

  

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
  

  deleteAnalyse(id: number): void {
    if (!id) {
      console.error('ID is missing');
      return;
    }
  
    this.analyseService.deleteAnalyse(id).subscribe({
      next: () => {
        console.log('Analyse deleted successfully');
        this.listAnalyse = this.listAnalyse.filter(analyse => analyse.id !== id);
  
        // Show success Snackbar
        this.snackBar.open('Analyse supprimée avec succès!', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (error) => {
        console.error('Erreur lors de la suppression :', error);
  
        // Show error Snackbar
        this.snackBar.open('Erreur lors de la suppression.', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
  showSnackbar(): void {
    this.snackBar.open('This is a test Snackbar!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
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
