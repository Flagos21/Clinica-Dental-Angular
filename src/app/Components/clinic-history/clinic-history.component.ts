import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.formulario = this.formBuilder.group({
      id_RUN: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      telefono_emergencia: ['', Validators.required],
      email: ['', Validators.required],
      alergias: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      await this.fichaClinica.addFicha(this.formulario.value);
      this.formulario.reset();
      alert("Datos enviados correctamente")
    console.log(Response);
  } else {
    console.log('Complete los campos')
    alert("Complete todos los campos")
  }
  
}

}
