import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutVolsComponent } from './ajout-vols/ajout-vols.component';
import { DelteModalComponent } from './delte-modal/delte-modal.component';
import { DetailsVolsComponent } from './details-vols/details-vols.component';
import { ListeVolsComponent } from './liste-vols/liste-vols.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', component: ListeVolsComponent },
  { path: 'vols', component: ListeVolsComponent },
  { path: 'vols/:id', component: DetailsVolsComponent },
  { path: 'add', component: AjoutVolsComponent },
  { path: 'remove', component: DelteModalComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
