import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { OnInit } from '@angular/core';
import Calendario from 'src/app/Interfaces/Calendario.interface';
import { CalendarioService } from 'src/app/Services/Calendario';

@Component({
  selector: 'app-root',
  templateUrl: './schedule-hours.component.html',
  styleUrls: ['./schedule-hours.component.css']
})
export class ScheduleHoursComponent implements OnInit {
  listarHora: Calendario[]=[];
  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents:INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this), //este selecciona los datos
    eventClick: this.handleEventClick.bind(this), //este borra los datos
    eventsSet: this.handleEvents.bind(this) //este no me acuerdo
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  

  currentEvents = signal<EventApi[]>([]);
  fichaClinicaService: any;

  constructor(private changeDetector: ChangeDetectorRef,
    private calendarService: CalendarioService
      ) {
  }
   
  ngOnInit() {
   this.obtenerHora();
    }

  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.mutate((options) => {
      options.weekends = !options.weekends;
      
    });
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('coco');
    const calendarApi = selectInfo.view.calendar;
    
    calendarApi.unselect(); // clear date selection

    if (title) {
      const newEventId = createEventId();
    
      const calendarEvent: Calendario = {
        id: newEventId,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      };
      // Agregar el evento al calendario
      calendarApi.addEvent(calendarEvent);
      this.calendarService.addHora(calendarEvent);
      // Enviar el evento a Firebase
      //this.fichaClinicaService.addFichaToCalendar(calendarEvent)
    
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Estas seguro de eliminar este evento '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
     
    
    console.log(this.listarHora)
    console.log(clickInfo.event.title)
    const eventNameToFind = clickInfo.event.title;
    const encontrado = this.listarHora.find(evento => evento.title === eventNameToFind);
    console.log(encontrado)
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
   
  }
  obtenerHora(){
    this.calendarService.obtenerHora().subscribe(doc =>{
      this.listarHora=[];
      doc.forEach((element:any)=>{
        this.listarHora.push({
          id: element.payload.id,
          ...element.payload.doc.data()
        });
       // console.log(element.payload.doc.id)
       // console.log(element.payload.doc.data())
      })
     // console.log(this.listarHora)
    })
  }
 
  
}
