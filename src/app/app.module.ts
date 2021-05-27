import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeVolsComponent } from './liste-vols/liste-vols.component';
import { DetailsVolsComponent } from './details-vols/details-vols.component';
import { AjoutVolsComponent } from './ajout-vols/ajout-vols.component';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { MenuComponent } from "./menu/menu.component";
import { VolsComponent } from './vols/vols.component';
import { HttpClientModule } from '@angular/common/http';
import { DelteModalComponent } from './delte-modal/delte-modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    ListeVolsComponent,
    DetailsVolsComponent,
    AjoutVolsComponent,
    MenuComponent,
    VolsComponent,
    DelteModalComponent,PageNotFoundComponent,

  ],
  imports: [
    AppRoutingModule,BrowserModule,FormsModule,
    ReactiveFormsModule,
   NgbModule, HttpClientModule,RouterModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' } ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
