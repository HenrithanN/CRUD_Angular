import { ClientesService } from './../../services/clientes/clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import * as moment from 'moment';
import { cpfValidator } from 'src/app/shared/validators/cpf.validator';
import { nomesValidator } from 'src/app/shared/validators/nomes.validator';
import { dataFormatoValidator } from 'src/app/shared/validators/data.validator';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: ModalService

    ) { }
    formCliente!: FormGroup;

  ngOnInit() {

    this.formCliente = this.fb.group({
      id: [''],
      nome: ['',
      [
        Validators.required,
        Validators.minLength(3),
        nomesValidator
      ]],
      data: ['',
      [
        Validators.required,
        dataFormatoValidator
      ]],
      cpf: ['',
      [
        Validators.required,
        cpfValidator
      ]],
      numero: ['',
      [
        Validators.required,
      ]],
      premio: ['',
      [
        Validators.required,
      ]],
      angariador: ['',
      [
        Validators.required,
        Validators.minLength(3),
        nomesValidator
      ]],
      plano: ['',
      [
        Validators.required,
      ]],
      status: ['',
      [
        Validators.required
      ]]
    })

    this.listarUm()
  }

   listarUm(){
      this.clientesService.listarUm(this.activatedRoute.snapshot.params.id).subscribe(res=>{
      this.formCliente.setValue(res)
    })
  }

  salvarAlteracoes(){
    if(this.formCliente.valid){


/*
Campos do Formulário
*/
  /*Nome*/
  const nome = this.formCliente.get('nome')?.value;
  /*DataFormatada*/
    const data = this.formCliente.get('data')?.value;
    const formatoData = moment(data,'DD/MM/YYYY');
    const dataFormatada = (formatoData.format('DD/MM/YYYY'))
  /*CPF*/
    const cpf = this.formCliente.get('cpf')?.value;
  /*Número*/
    const numero = this.formCliente.get('numero')?.value;
  /*Prêmio*/
    const premio = this.formCliente.get('premio')?.value;
  /*Angariador*/
    const angariador = this.formCliente.get('angariador')?.value;
  /*Plano*/
    const plano = this.formCliente.get('plano')?.value;
  /*Status*/
    const status = this.formCliente.get('status')?.value;
  /*Id*/
    const id = this.activatedRoute.snapshot.params.id;
      this.clientesService.atualizarDados({
        id: id,
        nome,
        data: dataFormatada,
        cpf,
        numero,
        premio,
        angariador,
        plano,
        status}).subscribe(()=>{
        const options = {
          titulo: 'Sucesso!',
          mensagem:'Dados Atualizados com Sucesso !'
        }
        this.modalService.alertModal(options).subscribe(()=>{

        })
        setTimeout(() => {
          this.modalService.bsModalRef.hide()
          this.router.navigate(['/clientes']);
        }, 1000);
      })

    }else{
      this.formCliente.markAllAsTouched()

    }
  }
}
