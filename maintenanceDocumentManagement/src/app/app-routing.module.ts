import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarOperadorComponent } from './component/operador/registrar-operador/registrar-operador.component';
import { RegistrarEquipoComponent } from './component/equipo/registrar-equipo/registrar-equipo.component';


const routes: Routes = [
{path:'',
redirectTo:'operador',
pathMatch: 'full'},

{path:'operador',
component: RegistrarOperadorComponent,

},

{path:'equipo',
component: RegistrarEquipoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
