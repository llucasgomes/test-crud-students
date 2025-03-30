# 📚 API CRUD de Alunos em C#

Esta é uma API CRUD desenvolvida em **C#**, utilizando **ASP.NET Core** e **Entity Framework Core** para gerenciar informações de alunos em um banco de dados **PostgreSQL**. 

## 🛠 Tecnologias Utilizadas

- **ASP.NET Core** - Framework para desenvolvimento da API.
- **Entity Framework Core** - ORM para manipulação do banco de dados.
- **PostgreSQL** - Banco de dados relacional.
- **Swagger** - Documentação e teste de endpoints.

---

## 🏗 Passos Realizados para o Desenvolvimento

1. **Criação do Projeto:** Comando `dotnet new webapi -n AlunosAPI`.
2. **Instalação dos Pacotes:** Pacotes adicionados para o EF Core e PostgreSQL.
3. **Configuração do Banco:** Configuração do `appsettings.json` com a string de conexão.
4. **Modelagem do Aluno:** Criação do modelo da entidade `Aluno`.
5. **Criação do Contexto:** Configuração do `AppDbContext` para gerenciar as tabelas.
6. **Setup no `Program.cs`:** Adicionado suporte ao PostgreSQL e configuração dos serviços.
7. **Implementação do CRUD:** Controller com endpoints para listar, adicionar, editar e remover alunos.
8. **Migração e Atualização do Banco:** Comandos EF Core para criar e atualizar a tabela.
9. **Execução e Testes:** Teste dos endpoints via Swagger.

---

## 📝 Como Clonar e Executar este Projeto

### 1️⃣ **Clone o Repositório**

Use o comando abaixo no terminal para clonar o projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd AlunosAPI
```

### 2️⃣ **Configure o Banco de Dados**
- Certifique-se de ter um banco PostgreSQL rodando.
- Atualize a string de conexão no arquivo ``appsettings.json.``

### 3️⃣ **Restaure os Pacotes**

Instale as dependências do projeto com:

```bash
dotnet restore
```
### 4️⃣ **Subir a Docker com postgreSQL**

Vá a te a pasta onde se encontra o arquivo ``docker-compose.yml`` e execute o seguinte comando no terminal:

```bash
docker compose up -d
```
### 5️⃣ **Crie o Banco de Dados**

Execute as migrações para configurar a base de dados:

```bash
dotnet ef database update
```
### 5️⃣ **Execute a API**

Inicie o servidor local com:

```bash
dotnet run
```

Acesse o Swagger para testar os endpoints:
http://localhost:3000/swagger

### 🎯 **Endpoints Principais**

- **POST** - ``/students`` - Criar um novo aluno.
- **GET** - ``/students`` - Listar todos os alunos.
- **GET** - ``/students/{ID}`` - Buscar aluno pelo ID.
- **PUT** - ``/students/{ID}`` - Atualizar informações de um aluno.
- **DELETE** - ``/students/{ID}`` - Remover aluno pelo ID.


### 🚀 Conclusão

Desenvolver essa API foi desafiador e gratificante. Vindo de **JavaScript**, aprender **C#**, **ASP.NET Core** e **Entity Framework Core** exigiu esforço e adaptação. Os maiores desafios foram entender a estrutura de uma linguagem tipada e configurar o banco de dados com o PostgreSQL. Apesar das dificuldades superadas, sei que ainda há muito a aprender, como práticas avançadas de segurança, testes e arquitetura. Essa experiência reforçou minha determinação em crescer e evoluir na área de backend.