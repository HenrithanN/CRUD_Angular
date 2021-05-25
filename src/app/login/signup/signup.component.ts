import { Signup } from './../../shared/interfaces/signup';
import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  formSignup!: FormGroup
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.formSignup = this.fb.group({
      usuario:['',[
        Validators.required
      ]],
      email:['',[
        Validators.required,
        Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')
      ]
    ],
      senha:['',[
        Validators.required,
        Validators.minLength(6)
      ]
    ]

    })
  }

  cadastrarUsuario(){
    const nome = this.formSignup.get('usuario')?.value;
    const email = this.formSignup.get('email')?.value;
    const senha = this.formSignup.get('senha')?.value;

    this.loginService.cadastrarUsuario({
      nome: nome,
      email: email,
      senha: senha
    }).subscribe(()=>{

      console.log('usuario cadastrado')
    }

    )
    console.log(nome)
  }

}
