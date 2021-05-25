import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule
  ],
  declarations: [
    ClientesComponent,
    EditarComponent,
    CadastrarComponent
  ],
  exports:[
    ClientesComponent,
  ]
})
export class ClientesModule { }
