import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoDto } from './dto/ProdutoDto.js';
import { ProdutoService } from './produto.service.js';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  getProdutos() {
    return this.produtoService.getProdutos();
  }

  @Get(':id')
  getProdutoById(@Param('id') id: string) {
    return this.produtoService.getProdutoById(id);
  }

  @Post()
  insereProduto(@Body() produto: ProdutoDto) {
    return this.produtoService.insereProduto(produto);
  }

  @Put(':id')
  alteraProduto(@Body() produto: ProdutoDto, @Param('id') id: string) {
    return this.produtoService.alteraProduto(id, produto);
  }

  @Delete(':id')
  excluiProduto(@Param('id') id: string) {
    return this.produtoService.excluiProduto(id);
  }
}
