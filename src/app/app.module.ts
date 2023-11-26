import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { IntroComponent } from './Components/intro/intro.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ClinicHistoryComponent } from './Components/clinic-history/clinic-history.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { ScheduleHoursComponent } from './Components/schedule-hours/schedule-hours.component';
import { Services1Component } from './Components/services1/services1.component';
import { TeamComponent } from './Components/team/team.component';
import { MainComponent } from './Components/main/main.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './Components/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { ListClinicHistoryComponent } from './Components/list-clinic-history/list-clinic-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PagenotfoundComponent,
    IntroComponent,
    FooterComponent,
    ClinicHistoryComponent,
    PaymentsComponent,
    ScheduleHoursComponent,
    Services1Component,
    TeamComponent,
    MainComponent,
    RegisterComponent,
    ListClinicHistoryComponent,
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
