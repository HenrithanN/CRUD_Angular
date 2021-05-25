import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { Signin } from 'src/app/shared/interfaces/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  formLogin!: FormGroup

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
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

  login(){
    const loginDados = this.formLogin.getRawValue() as Signin;

    if(this.formLogin.valid){
    this.loginService
      .authenticate(loginDados.email, loginDados.senha)
      .subscribe(
        ()=> {

          this.router.navigate(['/clientes']),
          console.log(loginDados)
          localStorage.setItem('Usuario:', loginDados.email)
        },
        err => {
          console.log(err);
          this.formLogin.reset();
        })
      }else{
        this.formLogin.markAllAsTouched();
      }
}
}
