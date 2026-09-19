import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoController } from './produto.controller.js';
import { ProdutoService } from './produto.service.js';

@Module({
  imports: [],
  controllers: [AppController, ProdutoController],
  providers: [AppService, ProdutoService],
})
export class AppModule {}
