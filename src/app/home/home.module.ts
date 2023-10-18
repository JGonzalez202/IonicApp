import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { IntegraComponent } from './integra/integra.component';
import { RegistraComponent } from './registra/registra.component';
import { AccessComponent } from './access/access.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,LoginComponent,RecoverComponent,IntegraComponent,RegistraComponent,AccessComponent]
})
export class HomePageModule {}
