import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { subDays, startOfDay, addDays } from 'date-fns';
import { RegisterService } from 'src/app/Services/RegistroHora.service';
import { RegistroHora } from 'src/app/models/RegistroHora';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  listHoras: RegisterService[] = [];
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
  ) {
    this.form = this.fb.group({
      funcionario: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^\+569\d{8}$/)]]
    });
  }

  ngOnInit(): void {
    this.obtenerRegistroHora();
  }

  mostrarSoloHoras(event: any) {
    const horaInput = event.target.value;
    const [horas, minutos] = horaInput.split(':');
    event.target.value = `${horas}:00`;
  }

  dayClicked({ date }: { date: Date }): void {
    console.log('Day clicked', date);
    // Puedes agregar lógica adicional según tus necesidades
  }

  crearHora() {
    if (this.form.valid) {
      const Registro: RegistroHora = {
        funcionario: this.form.value.funcionario,
        date: this.form.value.date,
        time: this.form.value.time,
        email: this.form.value.email,
        tel: this.form.value.tel,
        title: this.form.value.funcionario + this.form.value.date,
      };
      console.log(this.listHoras)

      // Verificar duplicados en Firebase
      const isDuplicate = this.listHoras.some(hora => hora.date === Registro.date && hora.time === Registro.time);

      if (isDuplicate) {
        this.successMessage = '';
        this.errorMessage = 'Ya existe un registro para la fecha y hora seleccionadas.';
      } else {
        this.registerService.guardarRegistroHora(Registro).then(() => {
          console.log('Registrado con éxito');
          this.errorMessage = '';
          this.successMessage = 'Registro enviado con éxito';
          this.obtenerRegistroHora(); // Actualizar eventos después de crear uno nuevo
        }, error => {
          console.log('Error al registrar:', error);
          this.successMessage = '';
          this.errorMessage = 'Error al guardar el registro. Por favor, inténtelo de nuevo.';
        });
      }
    } else {
      this.successMessage = '';
      this.errorMessage = 'Formulario no válido. Complete todos los campos correctamente.';
      console.log(this.errorMessage);
    }
  }

  obtenerRegistroHora() {
    this.registerService.obtenerRegistroHora().subscribe(doc => {
      this.listHoras = [];
      this.events = [];
  
      doc.forEach((element: any) => {
        const hora: RegisterService = {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        };
        this.listHoras.push(hora);
  
        // Agregar evento al calendario
        const evento = {
          start: startOfDay(new Date(`${hora.date}T${hora.time}`)),
          title: `${hora.funcionario} - ${hora.time}`,
          color: { primary: '#1e90ff', secondary: '#D1E8FF' }
        };
  
        this.events.push(evento);
      });
     
    });
    
    
  
}
}
