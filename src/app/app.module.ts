import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule} from '@angular/fire/compat'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyBuIaTekNyJbpBDINZHEtY1WLGqvX18pss",
      authDomain: "clinicadental-808bd.firebaseapp.com",
      projectId: "clinicadental-808bd",
      storageBucket: "clinicadental-808bd.appspot.com",
      messagingSenderId: "981730374950",
      appId: "1:981730374950:web:2f7d3b952c4e00169a3de7",
      measurementId: "G-9895JQMZMJ"
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
