import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleServiceService implements IMensagem{

  constructor() { }
  alert(mensagem: string): void {
    alert(mensagem);
    console.log(mensagem)
  }

  info(mensagem: string): void {
    console.log(mensagem)
  }

  sucesso(mensagem: string): void {
    console.log(mensagem)
  }

  erro(mensagem: string): void {
    console.log(mensagem)
  }
}
