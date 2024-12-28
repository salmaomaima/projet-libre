import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';  // Importer les composants associés aux routes
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { PageAnalyseComponent } from './pages/page-analyse/page-analyse.component';
import { NouvAnalyseComponent } from './composant/nouv-analyse/nouv-analyse.component';
import { PageUtilisateurComponent } from './pages/page-utililisateur/page-utilisateur.component';
import { NouvUtiliComponent } from './composant/nouv-utili/nouv-utili.component';
import { LaboManagementComponent } from './composant/labo-management/labo-management.component';
import { PageLaboComponent } from './pages/page labo/page labo.component';
import { NouvEpreuveComponent } from './composant/nouv-epreuve/nouv-epreuve.component';
import { NouvExamenComponent } from './composant/nouv-examen/nouv-examen.component';
import { DetailUtiliComponent } from './composant/detail-utili/detail-utili.component';

// import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
// import { ApplicationGuardService } from './services/guard/application-guard.service';
// Définir les routes de votre application
export const routes: Routes = [
  { path: 'pa', component: PageAcceuilComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'inscrire', component: PageInscriptionComponent },
//   { path: 'profil', component: PageProfilComponent},
//    {
//        path: 'mtpass',component: ChangerMotDePasseComponent
//  }
  {
    path: '',
    component: PageDashboardComponent,
    canActivate: [ApplicationGuardService],
    children: [
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuardService]
      },{
        path: 'analyse',
        component: PageAnalyseComponent,
        canActivate: [ApplicationGuardService]
      },{
        path: 'nouvAnalyse',
        component: NouvAnalyseComponent,
        canActivate: [ApplicationGuardService]
      },{
              path: 'utilisateur',
              component: PageUtilisateurComponent,
              canActivate: [ApplicationGuardService]
            },{
                    path: 'nouvutili',
                    component: NouvUtiliComponent,
                    canActivate: [ApplicationGuardService]
                  },
                  {
                    path: 'labo',
                    component: LaboManagementComponent,
                    canActivate: [ApplicationGuardService]
                  },
                             {
                              path: 'laboratoire',
                             component: PageLaboComponent,
                               canActivate: [ApplicationGuardService]
                               }
        ,
                     {
                      path: 'nouvEpreuve',
                     component: NouvEpreuveComponent,
                       canActivate: [ApplicationGuardService]
                       },
                       {
                        path: 'nouvExamen',
                       component: NouvExamenComponent,
                         canActivate: [ApplicationGuardService]
                         },{ path: 'nouvUtili/:id', component: NouvUtiliComponent ,canActivate: [ApplicationGuardService] },

                        ]



  }





  // Route principale
  // Ajoutez d'autres routes ici, si nécessaire
];

// Le module RouterModule.forRoot est utilisé pour gérer les routes dans l'application principale
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
