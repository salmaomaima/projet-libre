import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Importation correcte de AppRoutingModule
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { ComposantAcceuilComponent } from './composant/composant-acceuil/composant-acceuil.component';
import { MenuComponent } from './composant/menu/menu.component';
import { HeaderComponent } from './composant/header/header.component';
import { BouttonActionComponent } from './composant/boutton-action/boutton-action.component';
import { FormsModule } from '@angular/forms';  // Importation du FormsModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NouvUtiliComponent } from './composant/nouv-utili/nouv-utili.component';
import { NouvAnalyseComponent } from './composant/nouv-analyse/nouv-analyse.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Ajoutez ce module ici

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent,
    ComposantAcceuilComponent,
    NouvAnalyseComponent,
    MenuComponent,
    HeaderComponent,
    BouttonActionComponent,
    NouvUtiliComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule, // Utilisez BrowserAnimationsModule pour activer les animations
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
