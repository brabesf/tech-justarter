# Decisões de projeto

## Usar radix-ui

Não tenho muita experiência com frontend e como vi que o projeto já fazia uso da biblioteca resolvi seguir com o uso.

## Implementar API Mock de Search

Como a facilidade de rodar o projeto é um critério importante, rodar a API de Search em si não é um trabalho simples, e seria necessário fazer os importes de variados repositórios no Github. Portanto, para facilitar a avaliação resolvi implementar a API mock com a resposta no formato da API de search.

É importante, contudo, notar que muitos detalhes da implementação do meu código foram pensados com base na resposta de retorno da API de Search.

## Sorteio todo refresh

O sorteio a todo refresh foi implementado pelo mesmo motivo, a ideia é facilitar a avaliação. No lugar de precisar rodar do começo toda a aplicação basta dar refresh na página. Contudo numa futura aplicação com autenticação de usuário noto que o sorteio deve ser feito antes, e não na página do processo.

## Testes de componentes

Infelizmente não consegui compreender como se realizava os testes de "eventos multiclique" o que atrapalhou muito os testes, se os avaliadores puderem trazer exemplos/soluções para meus problemas fico muito grato... 

Se for possível observar o arquivo `frontend-boilerplate/src/components/search-input/court-selector-spec.ts` foi uma tentativa que tive para realizar o teste... mas como não consegui fazer rodar desisti de seguir para conseguir entregar o projeto dentro do prazo.

## Dockerização

Também tive uma tentativa de dockerizar o projeto todo para rodar um só comando e subir as diferentes partes do projeto, contudo seguia tendo problemas de dependências nos diretórios do `backend-graphql` e `frontend-boilerplate`, e por isso acabei desistindo também. 

## Lista de processos

No lugar de simplemente cair diretamente na página do processo criei uma listagem dos processos antes para que se possa escolher o processo antes. Isso têm relação com a API de busca na ideia de que futuramente seja possível realizar buscas com base no nome, ou tipo do processo, o que retornaria uma lista de processos.