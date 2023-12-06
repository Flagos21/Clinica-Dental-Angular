import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { combineLatest } from 'rxjs';
import { MainComponent } from './Components/main/main.component';
import { IntroComponent } from './Components/intro/intro.component';
import { ScheduleHoursComponent } from './Components/schedule-hours/schedule-hours.component';
import { Services1Component } from './Components/services1/services1.component';
import { TeamComponent } from './Components/team/team.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { ClinicHistoryComponent } from './Components/clinic-history/clinic-history.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { ListClinicHistoryComponent } from './Components/list-clinic-history/list-clinic-history.component';

const routes: Routes = [

  // Rutas Componentes
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'schedule-hours', component: ScheduleHoursComponent},
  {path: 'services', component: Services1Component},
  {path: 'team', component: TeamComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'list-clinic-history', component: ListClinicHistoryComponent},
  {path: 'clinic-history', component: ClinicHistoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login-register', component: LoginRegisterComponent},

  //  Rutas 404
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
