import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { FichaClinicaService } from 'src/app/Services/ficha-clinica.service';

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinic-history.component.html',
  styleUrls: ['./clinic-history.component.css']
})
export class ClinicHistoryComponent implements OnInit{

  formulario: FormGroup;
  
  constructor(
    private fichaClinica: FichaClinicaService,
    private router: Router
  ){
    this.formulario = new FormGroup({
      id_RUN: new FormControl(),
      nombres: new FormControl(),
      apellidos: new FormControl(),
      fecha_nacimiento: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      telefono_emergencia: new FormControl(),
      email: new FormControl(),
      alergias: new FormControl(),
      descripcion: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.formulario.value);
    const response = await this.fichaClinica.addFicha(this.formulario.value);
    console.log(response);
  }

}
