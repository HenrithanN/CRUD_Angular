import { cpfValidator } from './../../shared/validators/cpf.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { nomesValidator } from 'src/app/shared/validators/nomes.validator';
import { dataFormatoValidator } from 'src/app/shared/validators/data.validator';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit {

  formCliente!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
    private router: Router,
    private modalService: ModalService

  ) { }

  ngOnInit() {
    this.formCliente = this.fb.group({
      id: [''],
      nome: ['',
      [
        Validators.required,
        Validators.minLength(3),
        nomesValidator,
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
        Validators.required,
      ]],
    })
  }

  cadastrar(){
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

      this.clientesService.cadastrarDados({
        nome,
        data: dataFormatada,
        cpf,
        numero,
        premio,
        angariador,
        plano,
        status}
        ).subscribe(()=>{
        const options = {
          titulo: 'Sucesso!',
          mensagem:'Novo Cliente Cadastrado com Sucesso !'
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
