import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {
livro = {
  titulo: 'Crie aplicações com angular',
  avaliacao: 4.6546,
  preco: 9.99,
  dataLancamento: new Date (2017, 5, 29),
  cpf: 99977744421,
  cnpj: 10000000000000,
};
  constructor() { }

  ngOnInit() {
  }

}
