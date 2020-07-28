import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';
/* add Ng-bootstrap module for toast management */
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { RegistrarOperadorComponent } from './component/operador/registrar-operador/registrar-operador.component';
import { ToastComponent } from './component/util/toast/toast.component';
import { NavComponent } from './component/util/nav/nav.component';
import { ListarOperadorComponent } from './component/operador/listar-operador/listar-operador.component';
import { SigninComponent } from './component/views/signin/signin.component';
import { HomeComponent } from './component/views/home/home.component';
import { RegistrarEquipoComponent } from './component/equipo/registrar-equipo/registrar-equipo.component';
import { ListarEquipoComponent } from './component/equipo/listar-equipo/listar-equipo.component';
import { DetalleEquipoComponent } from './component/equipo/detalle-equipo/detalle-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarOperadorComponent,
    ToastComponent,
    NavComponent,
    ListarOperadorComponent,
    SigninComponent,
    HomeComponent,
    RegistrarEquipoComponent,
    ListarEquipoComponent,
    DetalleEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
