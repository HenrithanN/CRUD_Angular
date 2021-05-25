import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function dataFormatoValidator(control: AbstractControl){

  if (control.value.trim() && !/^(([0-3][0-9])\/?([0-1][0-9])\/?(\d{4}))+$/.test(control.value)){
    return {
      dataFormatoInvalido: true
    }
  }

  return null
}
