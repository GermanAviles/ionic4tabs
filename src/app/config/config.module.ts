import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigPage } from './config.page';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  },
  {
    path: ':id',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigPage, PerfilComponent]
})
export class ConfigPageModule {}
