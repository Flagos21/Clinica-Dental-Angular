import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import FichaClinica from '../Interfaces/fichaclinica.interface';

@Injectable({
  providedIn: 'root'
})
export class FichaClinicaService {

  constructor(private firestore: Firestore) { }


  addFicha(ficha: FichaClinica) {
    const fichaRef = collection(this.firestore, 'FichaClinica');
    return addDoc(fichaRef, ficha);
  }
  
}
