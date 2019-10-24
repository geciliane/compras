import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtoSelecionado : any;

  produtos = [
    {
      nome: 'Smart TV LED 50" Samsung 50RU7100 Ultra HD 4K',
      imagem: 'https://images-americanas.b2w.io/produtos/01/00/image/134241/7/134241731_1GG.jpg',
      descricao:
        'Agora assistir aos seus filmes favoritos, series, programas e muito mais vai tornar-se uma experiência ainda mais imersiva e completa, com a  Smart TV LED 50" Samsung UN50RU7100GXZD Ultra HD 4K. Desenvolvida com o que a de melhor em tecnologia para televisores, ela vai te oferecer imagens mais nítidas, cores vivas e som de altíssima qualidade. Modificando por completo a sua percepção, dando um tom mais realista as cenas.',
      valor: 1929.33,
    },
    {
      nome: 'Smartphone Samsung Galaxy S9 Dual Chip',
      imagem: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133274/7/133274700_1GG.png',
      descricao:
        'Divirta-se com jogos, assista a um tutorial ou envie mensagens de texto enquanto curte uma partida. Alterne entre aplicativos em um piscar de olhos, com a combinação poderosa de memória RAM e um processador de última geração',
      valor: 2199,
    },
    {
      nome: 'Smartphone Samsung Galaxy M20 64GB',
      imagem: 'https://images-americanas.b2w.io/produtos/01/00/img2/134253/7/134253791_1GG.jpg',
      descricao:
        'Com uma bateria de 5,000 mAh com carregamento rápido, o Galaxy M20 tem energia o suficiente para você fazer todas as suas atividades diárias e ainda sobrar carga para passar horas jogando ou assistindo aos seus conteúdos favoritos',
      valor: 899,
    },
    {
      nome: 'Fritadeira Elétrica Airfryer Viva Philips Walita',
      imagem: 'https://images-americanas.b2w.io/produtos/01/00/images/44852/6/44852624_1GG.jpg',
      descricao:
        'Com ela, você prepara todo tipo de fritura sem precisar usar nenhum tipo de óleo, garantindo mais sabor e uma alimentação saudável todos os dias. Seu recipiente interno é antiaderente evita que o alimento grude no fundo, além de permitir que ele fique mais crocante após o preparo',
      valor: 703.91,
    },
    {
      nome: 'Aspirador De Pó Ergorapido Power Red Electrolux',
      imagem: 'https://images-americanas.b2w.io/produtos/01/00/images/42180/6/42180600_1GG.jpg',
      descricao:
        'O Aspirador de Pó Ergorapido Electrolux é original, divertido e a melhor solução para uma limpeza instantânea, sem incomodar ninguém e sem alterar o seu bom humor, porque está sempre ao seu lado onde as coisas acontecem! ',
      valor: 967.91,
    },
  ];
  produto:any;
  disabled = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  open(content, produto) {
    this.modalService.open(content);
    this.produtoSelecionado = produto;
  }

  remover(i) {
    this.produtos.splice(i,1);
  }

}