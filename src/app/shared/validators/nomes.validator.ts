import { AbstractControl } from "@angular/forms";

export function nomesValidator(control: AbstractControl){

  if (control.value.trim() && !/^[A-Z][a-zãõçáéíóúãõâêîôû]+$/.test(control.value)){
    return {
      nomeInvalido: true
    }
  }
  return null
}
