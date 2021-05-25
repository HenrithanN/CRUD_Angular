import { ClientesService } from './../services/clientes/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal/modal.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Clientes } from '../shared/interfaces/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[] =[];
  constructor(
    private clientesService: ClientesService,
    private bsModalService: BsModalService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    try {

      this.clientesService.listarTodos()
      .subscribe(
        (res) => {
        this.clientes = this.clientes.concat(res)
      }, error =>{
        console.log(error, 'erro');
        return JSON.stringify(error)
      })
    } catch (e) {
      console.log(e)
    }
  }

  excluirCliente(id: number){

      const options = {
        titulo: 'Atenção!',
        mensagem: `Tem certeza que deseja Excluir este registro?`
      }
      this.modalService.modalConfirmacao(options).subscribe((res)=>{

        if (res){
          this.clientesService.deletarDados(id).subscribe(()=>{

            this.bsModalService.hide();
            window.location.reload();
          })
        }
      })
  }

}
