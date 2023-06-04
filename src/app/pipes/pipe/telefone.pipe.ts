import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Remove todos os caracteres que não são dígitos
    const digitsOnly = value.replace(/\D/g, '');

    // Verifica o número de dígitos
    const length = digitsOnly.length;

    if (length === 8) {
      // Formato: 9999-8888
      return digitsOnly.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else if (length === 10) {
      // Formato: (0dd) 9999-8888
      return digitsOnly.replace(/(\d{2})(\d{4})(\d{4})/, '(0$1) $2-$3');
    } else if (length === 11) {
      // Formato: (ddd) 9999-8888
      return digitsOnly.replace(/(\d{3})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      // Retorna o valor original
      return value;
    }
  }

}
