export class Equipo {
    constructor(
        _id = "", 
        name = "", 
        marca = "", 
        modelo = "",
        serie = "",
        fechaIngreso = "",
        localizacion = "",
        tipo = ""
        /* repuestos = [],
        valorasNominales = [],
        mediciones = [] */
        ) {
        this._id = _id;
        this.name = name;
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
        this.fechaIngreso = fechaIngreso;
        this.localizacion = localizacion;
        this.tipo = tipo;
        /* this.repuestos = repuestos; */
      }
      _id : string;
      name : string;
      marca: string;
      modelo : string;
      serie : string;
      fechaIngreso : string;
      localizacion : string;
      tipo : string;
      /* repuestos : [];
      valoresNominales : [];
      mediciones:[]; */

}
