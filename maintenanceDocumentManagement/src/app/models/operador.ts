import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Operador {
  constructor(_id = "", name = "", run = "") {
    this._id = _id;
    this.name = name;
    this.run = run;
  }
  _id: string;
  name: string;
  run: string;
}
