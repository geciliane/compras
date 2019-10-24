import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const valores = value.split(' ');
    let resultado = '';
    valores.forEach(valor => { resultado += valor.substr(0,1).toUpperCase()+valor.substr(1).toLowerCase()+ ' ';
    });

    return resultado;
    
  }

}
