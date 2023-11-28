import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { Calendario } from '../Interfaces/Calendario.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private firestore: Firestore) { }


  obtenerEventos(evento: Calendario) {
    const eventoCollection = collection(this.firestore, 'eventos');
    return addDoc(eventoCollection, evento);
  }
}
