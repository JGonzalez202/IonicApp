import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AccessComponent } from './access/access.component';
import { RecoverComponent } from './recover/recover.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    
  },
  {
    path: 'acceso',
    component: AccessComponent,
    
  },
  {
    path: 'recupera',
    component: RecoverComponent,
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
