import { ModalAlertComponent } from './../../components/modal/modal-alert/modal-alert.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { ModalConfirmacaoComponent } from 'src/app/components/modal/modal-confirmacao/modal-confirmacao.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  bsModalRef!: BsModalRef
constructor(
  public modalService: BsModalService
) { }

alertModal(options: any){
  this.bsModalRef = this.modalService.show(ModalAlertComponent);
  this.bsModalRef.content.titulo = options.titulo;
  this.bsModalRef.content.mensagem = options.mensagem;

  return (this.bsModalRef.content as ModalAlertComponent).confirmResult;
}

modalConfirmacao(options: any){
  this.bsModalRef = this.modalService.show(ModalConfirmacaoComponent);
  this.bsModalRef.content.titulo = options.titulo;
  this.bsModalRef.content.mensagem = options.mensagem;
  if (options.btnSim) {
    this.bsModalRef.content.btnSim = options.btnSim
  }
  if (options.btnNao) {
    this.bsModalRef.content.btnNao = options.btnNao
  }

  return (this.bsModalRef.content as ModalConfirmacaoComponent).confirmResult;
}
}
