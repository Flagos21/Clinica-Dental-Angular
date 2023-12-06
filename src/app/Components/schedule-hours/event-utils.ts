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
