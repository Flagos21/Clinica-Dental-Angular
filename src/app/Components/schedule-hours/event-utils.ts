import { Injectable } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CalendarioService } from 'src/app/Services/Calendario';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
 
];

export function createEventId() {
  return String(eventGuid++);
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  listarFicha: CalendarService[]=[];

  constructor(private firebase: AngularFirestore,
    private calendarService: CalendarioService
    ) { }
    
    ngOnInit() {
      this.obtenerFicha();
       }

       obtenerFicha(){
        this.calendarService.obtenerHora().subscribe(doc =>{
          this.listarFicha=[];
          doc.forEach((element:any)=>{
            this.listarFicha.push({
              id: element.payload.id,
              ...element.payload.doc.data()
            });
            console.log(element.payload.doc.id)
            console.log(element.payload.doc.data())
          })
          console.log(this.listarFicha)
        
        })
      }

     
    
}