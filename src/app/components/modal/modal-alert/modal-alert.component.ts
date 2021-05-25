import { Component, Input, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal-alert.component.html'
})
export class ModalAlertComponent implements OnInit {

  @Input() titulo: string = ''
  @Input() mensagem: string = ''
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {
    this.openModal
    this.confirmResult = new Subject();
  }

  confirmResult!: Subject<Boolean>;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

  hideModal(){
    this.modalService.hide()
  }
}
