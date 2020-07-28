import { Component, OnInit } from "@angular/core";
import { ToastService } from "../../util/toast.service";
import { OperadorServiceService } from "../../../services/operador-service.service";
import { NgForm } from "@angular/forms";
import { Operador } from "src/app/models/operador";
import { ListarOperadorComponent } from "../listar-operador/listar-operador.component";
@Component({
  selector: "app-registrar-operador",
  templateUrl: "./registrar-operador.component.html",
  styleUrls: ["./registrar-operador.component.css"],
  providers: [OperadorServiceService, ListarOperadorComponent],
})
export class RegistrarOperadorComponent implements OnInit {
  constructor(
    public toastService: ToastService,
    private operadorService: OperadorServiceService
  ) {}

  ngOnInit() {
    this.getOperadores();
  }
  getOperadores() {
    this.operadorService.getOperadores().subscribe((res) => {
      this.operadorService.operadores = res as Operador[];
      console.log(res);
    });
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.operadorService.selectedOperador = new Operador();
    }
  }
  guardarOperador(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.operadorService.putOperador(form.value).subscribe((res) => {
        this.toastService.show("Actualizado Exitoso", {
          classname: "bg-warning text-light",
          delay: 4000,
          autohide: true,
        });
        this.getOperadores();
        this.resetForm(form);
      });
    } else {
      this.operadorService.postOperador(form.value)
      .subscribe((res) => {
        this.toastService.show("Registro Exitoso", {
          classname: "bg-success text-light",
          delay: 4000,
          autohide: true,
        });
        this.getOperadores();
        this.resetForm(form);
      });
    }

    /* this.toastService.show("Registro Exitoso", {
      classname: "bg-success text-light",
      delay: 4000,
      autohide: true,
    }); */
  }
}
