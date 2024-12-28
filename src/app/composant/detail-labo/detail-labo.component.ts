import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {ClientDto} from '../../../gs-api/src/models/client-dto';
import {Router, RouterModule} from '@angular/router';
// import {CltfrsService} from '../../services/cltfrs/cltfrs.service';

@Component({
  selector: 'app-detail-labo',
  templateUrl: './detail-labo.component.html',
  styleUrls: ['./detail-labo.component.scss'],
    standalone: true,
      imports: [CommonModule, RouterModule]
})
export class DetailLaboComponent implements OnInit {

  @Input()
  origin = '';
  @Input()
  clientFournisseur: any = {};
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    // private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
  }

  modifierlabo(): void {

      this.router.navigate(['labo']);

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
