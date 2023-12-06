import { Injectable } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CalendarioService } from 'src/app/Services/Calendario';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Evento de todo el día',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Evento cronometrado',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00'
  },
  {
    id: createEventId(),
    title: 'Evento cronometrado',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
