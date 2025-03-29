# Documentação - API de CRUD de Alunos com Fastify, Prisma e TypeScript

## Tecnologias Utilizadas

- **Fastify**: Framework web rápido.
- **Prisma**: ORM para manipulação do banco de dados.
- **TypeScript**: Tipagem estática.
- **MVC**: Estrutura de organização do código (Model-View-Controller).

## Estrutura do Projeto

- **controllers**: Lógica de controle das requisições.
- **models**: Definições dos modelos de dados (Prisma).
- **routes**: Definição das rotas de CRUD.
- **services**: Lógica de negócios.
- **server.ts**: Inicialização do servidor.

## Rotas de CRUD

- **POST /student**: Cria um novo aluno.
- **GET /student**: Retorna todos os alunos.
- **GET /student/:id**: Retorna um aluno específico.
- **PUT /student/:id**: Atualiza um aluno.
- **DELETE /student/:id**: Deleta um aluno.

## Exemplo de Código

- **Controlador**: `student.controller.ts` - Gerencia as requisições e respostas.
- **Serviço**: `student.service.ts` - Interage com o banco de dados via Prisma.

## Execução

1. Instalar dependências:  
   `npm install`
   `pnpm i`
2. Iniciar servidor:  
   `npm run dev`
   `pnpm dev`
3. A API estará disponível em `http://localhost:3000`.
