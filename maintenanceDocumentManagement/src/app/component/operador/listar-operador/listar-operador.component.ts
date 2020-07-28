import { Component, OnInit } from '@angular/core';
import { OperadorServiceService } from "../../../services/operador-service.service";
import { Operador } from 'src/app/models/operador';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../util/toast.service';

@Component({
  selector: 'app-listar-operador',
  templateUrl: './listar-operador.component.html',
  styleUrls: ['./listar-operador.component.css']
})
export class ListarOperadorComponent implements OnInit {

  constructor(
    public operadorService:OperadorServiceService,
    public toastService: ToastService
    ) { }

  ngOnInit() {
    
  }
  getOperadores() {
    this.operadorService.getOperadores().subscribe((res) => {
      this.operadorService.operadores = res as Operador[];
      console.log(res);
    });
  }
  editarOperador(operador:Operador){
    this.operadorService.selectedOperador=operador;
    console.log(this.operadorService.selectedOperador);
  }
  eliminarOperador(_id: string, form: NgForm){
    if (confirm('esta accion necesita su confirmación')) {
      this.operadorService.deleteOperador(_id).subscribe( res => {
        this.toastService.show("Eliminado Exitoso", {
          classname: "bg-danger text-dark",
          delay: 4000,
          autohide: true,
        });
        this.getOperadores();
        form.reset();
      });
    }
  }
}
