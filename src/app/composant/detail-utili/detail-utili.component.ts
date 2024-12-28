import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {ClientDto} from '../../../gs-api/src/models/client-dto';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
// import {CltfrsService} from '../../services/cltfrs/cltfrs.service';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthControllerService } from '../../../gs-api/src/services';


@Component({
  selector: 'app-detail-utili',
  templateUrl: './detail-utili.component.html',
  styleUrls: ['./detail-utili.component.scss'],
    standalone: true,
      imports: [CommonModule, RouterModule, HttpClientModule]
})
export class DetailUtiliComponent implements OnInit {
  @Input() origin = '';
  // // @Input() UtilisateurDto: UtilisateurDto = {} as UtilisateurDto;
   @Input()
  UtilisateurDto: any = {};
  @Output() suppressionResult = new EventEmitter();
  // utilisateurId: number | null = null; // ID de l'utilisateur
  utilisateur: UtilisateurDto | null = null; // Détails de l'utilisateur
  // utilisateurs: UtilisateurDto[] = [];
// To store user data from backend

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService  ,// Inject the service
    private authControllerService: AuthControllerService,
  ) { }

  ngOnInit(): void {


  }



  modifierutilisateur(): void {
    if (this.UtilisateurDto?.id) {
      this.router.navigate(['nouvUtili', this.UtilisateurDto.id]);
    } else {
      console.error('UtilisateurDto ID is missing or undefined');
    }
  }
  // modifierutilisateur(): void {
  //   if (this.origin === 'client') {
  //     this.router.navigate(['nouvclient', this.clientFournisseur.id]);
  //   } else if (this.origin === 'fournisseur') {
  //     this.router.navigate(['nouvfournisseur', this.clientFournisseur.id]);
  //   }
  // }
  // openModal(utilisateurId: number | null) {
  //   this.utilisateurId = utilisateurId;
  // }

  // confirmerEtsupprimer(utilisateurId: number | null): void {
  //   if (utilisateurId === null) {
  //     console.error('L\'ID de l\'utilisateur est invalide');
  //     return; // Gérer l'erreur si l'ID est nul
  //   }

  //   const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');

  //   if (confirmation) {
  //     this.userService.supprimerUtilisateur(utilisateurId).subscribe({
  //       next: () => {
  //         // Mettre à jour la liste des utilisateurs après suppression
  //         this.utilisateurs = this.utilisateurs.filter(user => user.id !== utilisateurId);
  //         alert('Utilisateur supprimé avec succès');
  //         console.log(`Utilisateur avec l'ID ${this.UtilisateurDto.nomComplet} supprimé avec succès.`);
  //       },
  //       error: (err) => {
  //         console.error('Erreur lors de la suppression de l\'utilisateur', err);
  //         alert('Erreur lors de la suppression de l\'utilisateur');
  //       }
  //     });
  //   }
  // }}


  confirmerEtsupprimer(): void {
    if (!this.UtilisateurDto?.id) {
      console.error('L\'ID de l\'utilisateur est invalide');
      alert('Erreur : ID de l\'utilisateur non valide');
      return;
    }

    const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');

    if (confirmation) {
      this.userService.supprimerUtilisateur(this.UtilisateurDto.id).subscribe({
        next: () => {
          alert('Utilisateur supprimé avec succès');
          console.log(`Utilisateur avec l'ID ${this.UtilisateurDto?.id} supprimé avec succès.`);
          this.suppressionResult.emit('success');
          this.router.navigate(['utilisateur']);

        },
        error: (err) => {
          console.error('Erreur lors de la suppression de l\'utilisateur', err);
          this.suppressionResult.emit(err.error.error);
          alert('Erreur lors de la suppression de l\'utilisateur');
        }

      });
    }
  }

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
