import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-labo-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './labo-management.component.html',
  styleUrl: './labo-management.component.css'
})
export class LaboManagementComponent {
// Modèle d'un laboratoire
labo = {
  id: null as number | null,
  nom: '',
  logo: '',
  nrc: '',
  active: true,
  dateActivation: ''
};

// Liste des laboratoires
labos: any[] = [];

// Méthode pour soumettre le formulaire
onSubmit() {
  if (this.labo.id === null) {
    // Ajouter un nouveau laboratoire
    this.labo.id = this.labos.length + 1;
    this.labos.push({ ...this.labo });
  } else {
    // Modifier un laboratoire existant
    const index = this.labos.findIndex(l => l.id === this.labo.id);
    this.labos[index] = { ...this.labo };
  }
  this.resetForm();
}

// Méthode pour réinitialiser le formulaire
resetForm() {
  this.labo = {
    id: null,
    nom: '',
    logo: '',
    nrc: '',
    active: true,
    dateActivation: ''
  };
}

// Méthode pour charger un fichier (logo)
onLogoChange(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    this.labo.logo = reader.result as string;
  };
  reader.readAsDataURL(file);
}

// Modifier un laboratoire
editLabo(labo: any) {
  this.labo = { ...labo };
}

// Supprimer un laboratoire
deleteLabo(index: number) {
  this.labos.splice(index, 1);
}

}
