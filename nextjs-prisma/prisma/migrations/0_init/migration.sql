-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "produto" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "detalhe" VARCHAR(100),

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

