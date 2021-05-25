import { SignupComponent } from './login/signup/signup.component';
import { CadastrarComponent } from './clientes/cadastrar/cadastrar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NaoEncontradaComponent } from './shared/commons/nao-encontrada/nao-encontrada.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './clientes/editar/editar.component';
import { SigninComponent } from './login/signin/signin.component';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'clientes',
    children:[
      {
        path:'',
        component:ClientesComponent
      },
      {
        path:'editar/:id',
        component:EditarComponent,
      },
      {
        path:'cadastrar',
        component:CadastrarComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'nao-encontrada'
  },
  {
    path:'nao-encontrada',
    component: NaoEncontradaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
