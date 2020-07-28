import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

selectedEquipo: Equipo;
equipos: Equipo[];

URI_API = "http://localhost:3030/api/equipo"

  constructor(
    private http: HttpClient
    ) { 
      this.selectedEquipo = new Equipo();
    }
    getEquipos(){
      return this.http.get(this.URI_API);
    }
    postEquipo( equipo : Equipo ){
      return this.http.post(this.URI_API,equipo);
    }

    putEquipo( equipo : Equipo ){
      return this.http.put(this.URI_API+`/${equipo._id}`, equipo);
    }
 
    deleteEquipo(_id: string){
      return this.http.delete(this.URI_API+`/${_id}`);
    }


}
