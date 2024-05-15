## Getting Started

Estas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Siga os passos abaixo para configurar o ambiente.

### Pré-requisitos

Antes de iniciar, você precisa ter o seguinte instalado em sua máquina:
- Git
- Node.js
- npm
- PostgreSQL

Você também precisará criar um banco de dados PostgreSQL local.

### Instalação

#### 1. Clonar o Repositório

Primeiramente, clone o repositório do GitHub para a sua máquina local usando o seguinte comando no terminal:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

#### 2. Instalar Dependências

Dentro do diretório do projeto, execute o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install
```

#### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente necessárias para configurar o acesso ao PostgreSQL:

```
POSTGRES_DB='sheet'
POSTGRES_USERNAME='postgres'
POSTGRES_PASSWORD='postgres'
POSTGRES_HOST='localhost'
```

#### 4. Criar o Banco de Dados PostgreSQL

Certifique-se de que o serviço PostgreSQL está em execução em sua máquina. Você pode criar o banco de dados necessário com o seguinte comando no terminal do PostgreSQL:

```sql
CREATE DATABASE sheet;
```

### Executar o Projeto

Após configurar o ambiente, você pode iniciar o servidor localmente com o seguinte comando:

```bash
npm run dev
```

