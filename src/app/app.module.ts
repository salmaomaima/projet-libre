import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Importation correcte de AppRoutingModule
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { ComposantAcceuilComponent } from './composant/composant-acceuil/composant-acceuil.component';
// import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MenuComponent } from './composant/menu/menu.component';
import { HeaderComponent } from './composant/header/header.component';
import { BouttonActionComponent } from './composant/boutton-action/boutton-action.component';
import { FormsModule } from '@angular/forms';  // Importation du FormsModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NouvUtiliComponent } from './composant/nouv-utili/nouv-utili.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent,
    ComposantAcceuilComponent,
    // PageDashboardComponent,
    MenuComponent,   // Make sure these components are declared
    HeaderComponent,
    BouttonActionComponent,
    NouvUtiliComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule,
    HttpClientModule,
    FormsModule
 // Utilisation de AppRoutingModule pour la gestion des routes
  ],
  providers: [],
  bootstrap: [AppComponent,NouvUtiliComponent]
})
export class AppModule { }
