import { Injectable } from '@nestjs/common';
import { prisma } from './prisma.js';
import { ProdutoDto } from './dto/ProdutoDto.js';

@Injectable()
export class ProdutoService {
  getProdutos() {
    return prisma.produto.findMany();
  }

  getProdutoById(id: string) {
    return prisma.produto.findUnique({
      where: { id },
    });
  }

  insereProduto(produto: ProdutoDto) {
    return prisma.produto.create({
      data: produto,
    });
  }

  alteraProduto(id: string, produto: ProdutoDto) {
    return prisma.produto.update({
      where: { id },
      data: produto,
    });
  }

  excluiProduto(id: string) {
    return prisma.produto.delete({
      where: { id },
    });
  }
}
