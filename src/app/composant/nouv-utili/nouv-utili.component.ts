import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { UtilisateurDto } from '../../../gs-api/src/models';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
// import {ClientDto} from '../../../gs-api/src/models/client-dto';
// import {AdresseDto} from '../../../gs-api/src/models/adresse-dto';
// import {CltfrsService} from '../../services/cltfrs/cltfrs.service';
// import {FournisseurDto} from '../../../gs-api/src/models/fournisseur-dto';
// import {PhotosService} from '../../../gs-api/src/services/photos.service';
// import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-nouv-utili',
  templateUrl: './nouv-utili.component.html',
  styleUrls: ['./nouv-utili.component.scss'],
  standalone: true,

    imports: [CommonModule, RouterModule,FormsModule]
})
export class NouvUtiliComponent implements OnInit {

  origin = '';
 @Input()
  UtilisateurDto: any = {};
  // adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/th66.jpeg';
  successMsg: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private userService: UserService
    // private photoService: PhotosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
    // this.findObject();
  }


  // saveUser(): void {
  //   this.userService.addNewUser(this.UtilisateurDto).subscribe(
  //     response => {
  //       console.log('User saved successfully:', response);
  //       if (typeof response === 'string') {
  //         localStorage.setItem('authToken', response);
  //       } else {
  //         console.log('Response object:', response);
  //       }
  //     },
  //     error => {
  //       console.error('Error saving user:', error);
  //       // Ajoutez plus d'informations sur l'erreur retournée
  //       if (error.status) {
  //         console.error(`Error status: ${error.status}, message: ${error.message}`);
  //       }
  //       this.errorMsg.push('There was an error saving the user.');
  //     }
  //   );
  // }
  saveUser(): void {
    this.userService.addNewUser(this.UtilisateurDto).subscribe({
      next: response => {
        console.log('User saved successfully:', response);
        this.successMsg = 'Utilisateur enregistré avec succès !';
        if (response) {
          localStorage.setItem('authToken', response); // Si c'est un token JWT
        }
      },
      error: error => {
        console.error('Error occurred:', error);
        if (error.status === 200) {
          console.warn('User saved successfully, but response caused parsing error.');
          this.successMsg = 'Utilisateur enregistré avec succès !';
        } else {
          this.errorMsg.push('There was an error saving the user.');
        }
      }
    });
  }


  // saveUser(): void {
  //   // Appel au service UserService pour enregistrer l'utilisateur
  //   this.userService.addNewUser(this.UtilisateurDto).subscribe(
  //     response => {
  //       console.log('User saved successfully', response);
  //       // Vérifiez ici si la réponse est JSON ou un message spécifique (comme un token JWT)
  //       if (typeof response === 'string') {
  //         // Si la réponse est une chaîne (par exemple, un token JWT), vous pouvez la traiter ici
  //         localStorage.setItem('authToken', response);
  //       } else {
  //         // Si la réponse est un objet JSON, vous pouvez gérer cela ici
  //         console.log('Response:', response);
  //       }
  //       // Rediriger ou afficher un message de succès
  //     },
  //     error => {
  //       console.error('Error saving user', error);
  //       this.errorMsg.push('There was an error saving the user.');
  //     }
  //   );
  // }

  // findObject(): void {
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   if (id) {
  //     if (this.origin === 'client') {
  //       this.cltFrsService.findClientById(id)
  //       .subscribe(client => {
  //         this.clientFournisseur = client;
  //         this.adresseDto = this.clientFournisseur.adresse;
  //       });
  //     } else if (this.origin === 'fournisseur') {
  //       this.cltFrsService.findFournisseurById(id)
  //       .subscribe(fournisseur => {
  //         this.clientFournisseur = fournisseur;
  //         this.adresseDto = this.clientFournisseur.adresse;
  //       });
  //     }
  //   }
  // }

  // enregistrer(): void {
  //   if (this.origin === 'client') {
  //     this.cltFrsService.enregistrerClient(this.mapToClient())
  //     .subscribe(client => {
  //       this.savePhoto(client.id, client.nom);
  //     }, error => {
  //       this.errorMsg = error.error.errors;
  //     });
  //   } else if (this.origin === 'fournisseur') {
  //     this.cltFrsService.enregistrerFournisseur(this.mapToFournisseur())
  //     .subscribe(fournisseur => {
  //       this.savePhoto(fournisseur.id, fournisseur.nom);
  //     }, error => {
  //       this.errorMsg = error.error.errors;
  //     });
  //   }
  // }

  cancelClick(): void {

      this.router.navigate(['utilisateur']);

  }

  // mapToClient(): ClientDto {
  //   const clientDto: ClientDto = this.clientFournisseur;
  //   clientDto.adresse = this.adresseDto;
  //   return clientDto;
  // }

  // mapToFournisseur(): FournisseurDto {
  //   const fournisseurDto: FournisseurDto = this.clientFournisseur;
  //   fournisseurDto.adresse = this.adresseDto;
  //   return fournisseurDto;
  // }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

  // savePhoto(idObject?: number, titre?: string): void {
  //   if (idObject && titre && this.file) {
  //     const params: SavePhotoParams = {
  //       id: idObject,
  //       file: this.file,
  //       title: titre,
  //       context: this.origin
  //     };
    //   this.photoService.savePhoto(params)
    //   .subscribe(res => {
    //     this.cancelClick();
    //   });
    // } else {
    //   this.cancelClick();
    // }
  }

