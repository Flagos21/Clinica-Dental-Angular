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
  obtenerHora(): Observable<any>{
    return this.firebase.collection('CalendarioHora').snapshotChanges()
  }
  eliminarHora(element: Calendario): Promise<any>{
    return this.firebase.collection('CalendarioHora').doc(element.id).delete();
  }
  
}















/* import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, deleteDoc, updateDoc, getDocs, getDoc } from '@angular/fire/firestore';
import  Calendario  from '../Interfaces/Calendario.interface';
import { Observable } from 'rxjs';
//import { Firestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  collection(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: Firestore) { }
  addFicha(evento: Calendario) {
    
  }
  eliminarFecha(evento: Calendario) {
    
  }

  modificarFecha(eventoId: string, nuevoEvento: Calendario) {
    //const HoraDoc = doc(this.firestore, 'CalendarioHora', eventoId);
    //return updateDoc(HoraDoc, nuevoEvento);
  }

  

} */