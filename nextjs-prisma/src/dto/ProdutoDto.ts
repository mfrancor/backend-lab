export class ProdutoDto {
  nome: string;
  preco: number;
  quantidade: number;
  detalhe?: string;

  constructor(
    nome: string,
    preco: number,
    quantidade: number,
    detalhe?: string,
  ) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.detalhe = detalhe;
  }
}
