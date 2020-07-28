import { Component, OnInit, OnDestroy } from "@angular/core";
import { ToastService } from "../../util/toast.service";
import { EquipoService } from "src/app/services/equipo.service";

import { Equipo } from "src/app/models/equipo";

import { NgForm } from '@angular/forms';

@Component({
  selector: "app-listar-equipo",
  templateUrl: "./listar-equipo.component.html",
  styleUrls: ["./listar-equipo.component.css"],
})
export class ListarEquipoComponent implements OnInit {
  equipos: Equipo[];
  dtOptions: DataTables.Settings = {};

  constructor(
    public toastService: ToastService,
    public equipoService: EquipoService
  ) {
    this.equipos = equipoService.equipos;
  }
  getEquipos() {
    this.equipoService.getEquipos().subscribe((res) => {
      this.equipoService.equipos = res as Equipo[];
    });
  }
  editEquipo( equipo:Equipo ){
this.equipoService.selectedEquipo=equipo;

  }
  resetForm( form? : NgForm ){
    if (form) {
      form.reset();
      this.equipoService.selectedEquipo = new Equipo();
    }
  }
  deleteEquipo(_id:string, form:NgForm){
    if (confirm('esta accion necesita su confirmación ¿realmente desea eliminar el registrto?')) {
      this.equipoService.deleteEquipo(_id).subscribe((res)=>{
        this.toastService.show("Eliminado Exitoso",{
          classname: "bg-danger text-light",
          delay: 4000,
          autohide: true
        });  
        this.getEquipos();
        this.resetForm(form);
      });
    }
    
    

  }

  ngOnInit() {}
}
