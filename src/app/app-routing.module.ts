import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  //  Rutas 404
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
