import { Component, OnInit } from "@angular/core";
import { EquipoService } from "src/app/services/equipo.service";
import { ToastService } from "../../util/toast.service";
import { Equipo } from "src/app/models/equipo";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-registrar-equipo",
  templateUrl: "./registrar-equipo.component.html",
  styleUrls: ["./registrar-equipo.component.css"],
})
export class RegistrarEquipoComponent implements OnInit {
  constructor(
    public toastService: ToastService,
    private equipoService: EquipoService
  ) {}

  ngOnInit() {
    this.getEquipos();
  }
  getEquipos() {
    this.equipoService.getEquipos().subscribe((res) => {
      this.equipoService.equipos = res as Equipo[];
    });
  }
  resetForm( form? : NgForm ){
    if (form) {
      form.reset();
      this.equipoService.selectedEquipo = new Equipo();
    }
  }
  guardarEquipo( form: NgForm ){
    if (form.value._id) {     
      this.equipoService.putEquipo(form.value)
      .subscribe((res)=>{
        
        this.toastService.show("Actualizado Correctamente",
         {
          classname: "bg-warning text-light",
          delay: 4000,
          autohide:true
        });
        this.resetForm(form);
        this.getEquipos();
        
      });
      
    } else {
      this.equipoService.postEquipo(form.value)
      .subscribe(
        (res) => {
          console.log(form.value);

          this.toastService.show("Registro Exitoso", 
          {
            classname:"bg-success text-light",
            delay: 4000,
            autohide: true,
          });
          this.getEquipos();
          this.resetForm(form);
        }
      );
      
    }
  }
  
}
