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

## 1-Baixe o projeto:
```shell
    git clone https://github.com/RicardoFedrigo/carteira-virtual
```
## 2-Instale as dependências: 
```shell
    yarn install 
    ou 
    npm install
```
## 3-Compile o projeto
```shell
    yarn build 
    ou 
    npm run build
```
## 3.1- Caso queira executar como desenvolvedor 
```shell
    yarn dev 
    ou 
    npm run dev
```
## 3.2- Para rodar as migrações  
```shell
    yarn typeorm:run
    ou 
    npm run typeorm:run
```
## 3.3- Para limpar o banco de dados  
```shell
    yarn typeorm:clear
    ou 
    npm run typeorm:clear
```
## 4 Suba os containers com docker-compose (Debian)
```shell
    docker-compose build 
    ou 
    docker-compose up -d
```

### 4.1 Notas para execução:
Caso deseje executar o programa fora do docker para um banco diferente ou host o seguinte a arquivo ormconfig.json:
```json
  "host": <HOST>,
```

### Possiveis problemas:
Caso ocorra o seguinte problema:
```shell
SyntaxError: Cannot use import statement outside a module

```
Compile o projeto normalmente, e mude no arquivo ormconfig.json 
```json
 "entities": ["src/entity/*.ts", "./build/src/entity/*.js"]-> "entities": ["src/entity/*.ts"]
```
e execute com node normalmente.
