# Descrição
Carteira virtual com registro de transações de entrada e saida 

# Funções implementadas:

- [x] Cadastrar movimentações financeiras de entrada e saída de dinheiro.

- [x] Permitir cadastrar observações para cada movimentação financeira.

- [x] Mostrar quanto dinheiro tenho na carteira. 

- [x] Gravar um histórico de entradas e saídas de dinheiro da carteira. 

- [x] Permitir visualizar todo o histórico de movimentação de uma carteira de um determinado período.

- [x] Permitir exportar todas as movimentações de um determinado período em formato CSV.

# Tecnologias e linguagens 
[Node.js](https://nodejs.org/en/)

[typescript](https://www.typescriptlang.org/)

[PostgreSql](https://www.postgresql.org/)

[Docker](https://www.docker.com/)

# Requisitos 

[Docker-compose](https://docs.docker.com/compose/)

[Yarn](https://yarnpkg.com/) ou [Npm](https://www.npmjs.com/)

[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
# Como executar 

## Baixe o projeto:
```shell
    git clone https://github.com/RicardoFedrigo/carteira-virtual
```
## Instale as dependências: 
```shell
    yarn install 
    ou 
    npm install
```
## Compile o projeto
```shell
    yarn build 
    ou 
    npm run build
```

## Suba os containers com docker-compose (Debian)
```shell
    docker-compose build 
    ou 
    docker-compose up -d
```
