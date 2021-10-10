# Gerador de Carro

O gerador de Carros foi construido em duas linguagens, JavaScript e Haskell. Ambas as implementações, estão armazenadas na diretoria com o respetivo nome da Linguagem.

## 1. JavaScript (NodeJS)
Antes de executar o Script, é importante instalar o [NodeJS](https://nodejs.org) (aconselha-se a versão mais recente) com o [NPM](https://www.npmjs.com). Assim que tenham sido instalados, executar o seguinte comando, na diretoria do ficheiro `package.json`. 

```
$ npm install
```
 
Assim que todos os módulos tenham sido instalados com sucesso, poderá ser executado o gerador recorrendo ao comando:

```
$ node index
```

Corrido o comando, a consola deverá indicar se existe algum erro ou se o gerador conclui com sucesso. Para este ultimo caso, deverá aparecer um ficheiro `logsPOO_carregamentoInicial.bak` na mesma diretoria.

## 2. Haskell  

Uma vez que todos os elementos do grupo vieram de uma faculdade diferente, onde não é lecionado Haskell, os conhecimentos sobre a mesma são poucos, mesmo assim, tentamos implementar um gerador do ficheiro Log nesta linguagem recorrendo ao QuickCheck.  
Grande parte a implementação foi concluída com sucesso, excepto a verificação se os os NIFs gerados são unicos e exportar os dados gerados para um ficheiro.

```
$ ghci caminho/ate/ao/ficheiro/EX1.hs
```

e de seguida sample seguido da função a gerar. Serve de exemplo o gerador de alugueres:

```
*Main> sample genAluguer
```


# Alunos
Diogo Duarte - PG41843  
Miguel Solans - PG41841  
André Coutinho - PG39284  
Rita Pereira - PG41098