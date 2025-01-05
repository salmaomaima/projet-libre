import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyseControllerService } from '../../../gs-api/sr/services';
import { Analyse } from '../../../gs-api/sr/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nouv-analyse',
  templateUrl: './nouv-analyse.component.html',
  styleUrls: ['./nouv-analyse.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class NouvAnalyseComponent implements OnInit {
  analyse: Analyse = { id: 0, nom: '', description: '', fkLaboratoire: 0 };
  isEditMode = false;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private analyseService: AnalyseControllerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadAnalyseDetails(+id);
    }
  }

  loadAnalyseDetails(id: number): void {
    this.analyseService.getAnalyseById(id).subscribe({
      next: (data) => {
        this.analyse = data; // Pré-remplit les champs avec les données récupérées
      },
      error: (err) => {
        console.error('Erreur lors du chargement de l\'analyse :', err);
      }
    });
  }

  saveAnalyse(): void {
    if (this.isEditMode) {
      this.analyseService.updateAnalyse(this.analyse.id!, this.analyse).subscribe({
        next: () => {
          console.log('Analyse mise à jour avec succès.');
          this.router.navigate(['analyse']); // Redirige vers la liste après modification
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour de l\'analyse :', err);
        }
      });
    } else {
      this.analyseService.createAnalyse(this.analyse).subscribe({
        next: () => {
          console.log('Nouvelle analyse créée avec succès.');
          this.router.navigate(['analyse']); // Redirige vers la liste après création
        },
        error: (err) => {
          console.error('Erreur lors de la création de l\'analyse :', err);
        }
      });
    }
  }

 

  cancelClick(): void {
    this.router.navigate(['analyse']); // Redirige vers la liste sans enregistrer
  }
}
