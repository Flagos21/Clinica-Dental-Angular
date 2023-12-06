import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RegistroHora } from '../models/RegistroHora';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService{
  date?: Date;
  time?: Date;
  funcionario: any;
    constructor(private firebase: AngularFirestore){

    }

    guardarRegistroHora(hora: RegistroHora): Promise<any> {
 return this.firebase.collection('RegistroHora').add(hora);
    }
    obtenerRegistroHora(): Observable<any>{
        return this.firebase.collection('RegistroHora').snapshotChanges();
    }
   
}
