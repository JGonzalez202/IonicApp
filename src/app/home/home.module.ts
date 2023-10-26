import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { IntegraComponent } from './integra/integra.component';
import { RegistraComponent } from './registra/registra.component';
import { AccessComponent } from './access/access.component';
import { InstitucionesComponent } from '../principal/instituciones/instituciones.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    ],
  declarations: [HomePage,LoginComponent,RecoverComponent,IntegraComponent,RegistraComponent,
    AccessComponent,InstitucionesComponent]
})
export class HomePageModule {}
