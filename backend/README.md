# star-wars-project

## O PROJETO

### UMA HISTÓRIA STAR WARS

Uma das maiores franquias do mundo cinematográfico, Star Wars vem cativando fãs desde mais de 5 décadas. Possuindo o tipo *space opera*, traz todo um enredo de batalhas intergaláticas, fazendo com que o espectador tenha uma experiẽncia Star Wars. Conta atualmente com 3 trilogias principais, 3 *spin-offs* cinematográficos e inúmeras séries e produtos, cativando milhões de fãs pelo mundo.

#### CASO DE USO

Precisamos de um sistema para gerenciar o nosso acervo de produtos Star Wars. Para isso, precisaremos cadastrar os filmes que já possuímos, permitindo visualizar informações a respeito destes, bem como todos os *actions figures* que temos dos filmes. As informações sobre os filmes, personagens, naves e veículos podem ser obtidas através da [API Graphql Star Wars](https://graphql.org/swapi-graphql).

#### REQUISITOS

Deve-se criar uma aplicação web onde podemos:

* Controlar a autenticação e autorização de usuário;
* Registrar os filmes já adquiridos;
* Buscar todos os filmes já existentes, bem como personagens e veículos;
* Gerenciar as figuras de ação adquiridos;

#### SERVIÇO
Poderá ser criado um serviço para manter os dados utilizado na aplicação caso assim o desejar, recomendamos que seja:
* Um Serviço em NodeJS que irá prover as informações das entidades;
* Deverá ser acessível via REST ou GraphQL (recomendamos GraphQL);
* O banco de dados pode ser a sua escolha (recomendamos Postgres);
* A utilização de ORM é opcional, porém recomendada;

Caso não seja utilizado um serviço, recomendamos salvar ou em um SQLite ou via Local Storage as informações.

#### ENTIDADES
* Usuário
    * id
    * email
    * senha
* Filme Adquirido
    * id
    * id do filme
    * data da compra
    * quantidade de vezes assistido
    * valor de venda
    * comentários
* *Action Figure*
    * id
    * data da compra
    * comentários
    * localização

#### HISTÓRIAS DE USUÁRIO

1. Autenticação de usuário

> Gostaria que os usuários pudessem se cadastrar e fazer login no sistema. A visualização de filmes adquiridos deve ser por data da compra e quantidade de vezes assistido, sendo que quando menos o filme foi assistido, mais ao topo estará.

Você pode criar a sua autenticação de usuário ou utilizar alguma outra, como do Facebook, por exemplo.

2. Buscar filme

> Ao identificar um filme para compra, gostaria de procurá-lo por nome ou por mensagem de abertura (openingCrawl), permitindo registrar sua compra caso ele ainda não tenha sido incluído.

A forma de pesquisa deve funcionar com sequências de caracteres, ou seja, ao digitar `the`, deverá aparecer tanto `The Empire Strikes Back` quanto `Return of the Jedi`.

Você pode utilizar tanto os verbos HTTPS com RESTfull ou utilizar a comunicação com o GraphQL.

3. Adicionar comentários e demais informações ao filme

> Durante o registro do filme, os usuários podem registrar comentários e valor de revenda.

As informações podem ser textuais ou sugeridas para o usuário;
As informações poderão ser alteradas e/ou excluídas posteriormente;
Ao consultar as informações de filme deve ser exibido também seu título, mensagem de abertura e data de lançamento.

4. Gerenciamento das *action figures*

> Os usuários podem incluir *action figures* em seu registro.

Deverá ser realizada a busca de personagens, veículos e naves Star Wars, permitindo sua seleção para registro. Com isso será possível informar a data da compra, comentários e onde está o *action figure*;
As informações poderão ser alteradas e/ou excluídas posteriormente;
Ao consultar as informações de veículo e naves devem ser exibidos também, seu nome, modelo, classe e custo em créditos;
Ao consultar as informações de personagens devem ser exibidos também nome, ano de nascimento, gênero, planeta de origem, sua espécie e linguagem.
