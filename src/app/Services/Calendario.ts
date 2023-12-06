import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import  Calendario  from '../Interfaces/Calendario.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {


  constructor(private firebase:AngularFirestore){

  }
  addHora(evento : Calendario): Promise<any>{
    return this.firebase.collection('CalendarioHora').add(evento);
  }
  obtenerHoras(): Observable<any>{
    return this.firebase.collection('CalendarioHora').snapshotChanges()
  }
  eliminarHora(eventId: string): Promise<void> {
    return this.firebase.collection('CalendarioHora').doc(eventId).delete();
  }
  
}