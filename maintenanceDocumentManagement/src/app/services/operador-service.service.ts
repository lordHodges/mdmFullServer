import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Operador } from "../models/operador";
@Injectable({
  providedIn: "root",
})
export class OperadorServiceService {
  selectedOperador: Operador;

  operadores: Operador[];
  URI_API = "http://localhost:3030/api/operador";



  constructor(private http: HttpClient) {
    this.selectedOperador = new Operador();
  }
  getOperadores() {
    return this.http.get(this.URI_API);
  }
  postOperador(operador:Operador) {
    return this.http.post(this.URI_API,operador);
  }
  putOperador(operador:Operador){
    return this.http.put(this.URI_API+`/${operador._id}`, operador);
  }
  deleteOperador(_id:string){
    return this.http.delete(this.URI_API+`/${_id}`);

  }
}
