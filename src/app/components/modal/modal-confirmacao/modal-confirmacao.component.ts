import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html'
})
export class ModalConfirmacaoComponent implements OnInit {

  @Input() titulo: string = ''
  @Input() mensagem: string = ''
  @Input() sim: string = 'Sim'
  @Input() nao: string = 'Não'

  modalRef!: BsModalRef;


  constructor(
    public modalService: BsModalService
  ) { }
  confirmResult!: Subject<Boolean>;

  ngOnInit() {
    this.confirmResult = new Subject();
    this.showModal
  }

  showModal(template: TemplateRef<any>){

    this.modalRef = this.modalService.show(template);
  }

  hideModal(){
    this.modalService.hide();
  }

  onConfirm(valor: boolean){
    this.confirmResult.next(valor);
    this.modalRef.hide();
  }
}
