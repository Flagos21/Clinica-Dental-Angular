import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  mostrarSoloHoras(event: any) {
    const horaInput = event.target.value; // Obtener el valor del input
    const [horas, minutos] = horaInput.split(':'); // Separar las horas y los minutos

    // Modificar el valor del input para mostrar solo las horas (formato HH:00)
    event.target.value = `${horas}:00`;
  }
}
