# Sistema de Controle de Estoque

## Objetivo
Desenvolver uma plataforma SaaS simples e acessível para centralizar o controle de estoque, permitindo cadastrar produtos, registrar entradas e saídas, acompanhar quantidades e visualizar informações importantes do estoque em um único sistema.

---
## Usuários do Sistema
- Admin.
- Repositor.
- Estoquista.

---
## Problemas Identificados
- Emprestas tem dificuldade para controlar entrada, saída, quantidade e qualidade de produtos.
- Muitas vezes usam anotações manuais e planilhas para controlar o estoque.
- Apenas um funcionário sobrecarregado faz a gestão do estoque gerando erros, perdas, falta de produtos e centralização em um único funcionário.

---
## Requisitos Funcionais

### Produtos:
#### RF01 - Cadastrar produto
O sistema deve permitir o cadastro de produtos informando: 
**ID, nome, código, categoria, quantidade, preço de compra, preço de venda e estoque mínimo.**

#### RF02 - Editar produto
O sistema deve permitir a alteração dos dados cadastrados de um produto.

#### RF03 - Excluir produto
O sistema deve permitir a exclusão de produtos cadastrados, respeitando as regras de negócio relacionadas ao histórico de movimentações.

#### RF04 - Cadastrar categoria
O sistema deve permitir o cadastro de categorias para os produtos.

#### RF05 - Controlar quantidade em estoque
O sistema deve manter a quantidade disponível de cada produto e atualizá-la conforme as movimentações de entrada e saída.

#### RF06 - Cadastrar preço de compra
O sistema deve permitir informar e alterar o preço de compra de cada produto.

#### RF07 - Cadastrar preço de venda
O sistema deve permitir informar e alterar o preço de venda de cada produto.

#### RF08 - Definir estoque mínimo
O sistema deve permitir definir uma quantidade mínima para cada produto.

#### RF09 - Identificar estoque baixo
O sistema deve identificar produtos cuja quantidade em estoque seja igual ou inferior ao estoque mínimo definido.

### Movimentações:
#### RF10 - Registrar entrada de produtos
O sistema deve permitir registrar a entrada de produtos no estoque, informando **obrigatoriamente** a quantidade e o preço de compra, com possibilidade **opcional** de informar o fornecedor.

#### RF11 - Atualizar estoque após entrada
O sistema deve aumentar automaticamente a quantidade disponível do produto após o registro de uma entrada.

#### RF12 - Registrar saída de produtos
O sistema deve permitir registrar a saída de produtos informando o produto, a quantidade e o motivo da saída.

#### RF13 - Motivo da saída
O sistema deve permitir selecionar um dos motivos predefinidos: **Venda, Perda, Avaria/Dano, Uso interno, Ajuste de estoque ou Outro**.

#### RF14 - Atualizar estoque após saída
O sistema deve reduzir automaticamente a quantidade disponível do produto após o registro da saída.

#### RF15 - Validar disponibilidade para saída
O sistema não deve permitir uma saída cuja quantidade seja superior à quantidade disponível em estoque.

#### RF16 - Histórico de movimentações
O sistema deve manter o histórico das entradas e saídas realizadas, registrando **o produto, tipo de movimentação, quantidade, responsável e data/hora**. Nas entradas deve registrar também **o preço de compra e, quando informado o fornecedor**.

### Fornecedores:
#### RF17 - Cadastrar fornecedor
O sistema deve permitir o cadastro de fornecedores informando **Nome/Razão Social, CPF/CNPJ, Telefone, E-mail e Endereço**.

#### RF18 - Editar fornecedor
O sistema deve permitir a alteração dos dados de um fornecedor.

#### RF19 - Excluir fornecedor
O sistema deve permitir a exclusão de fornecedores, respeitando as regras relacionadas ao histórico de movimentações.

#### RF20 - Vincular fornecedor à entrada
O sistema deve permitir vincular um fornecedor a uma entrada de estoque, quando essa informação estiver disponível.

### Clientes:
#### RF21 - Cadastrar cliente
O sistema deve permitir o cadastro de clientes informando **Nome, CPF/CNPJ, Telefone, e-mail e endereço**.

#### RF22 - Editar cliente
O sistema deve permitir a alteração dos dados de clientes cadastrados.

#### RF23 - Excluir cliente
O sistema deve permitir a exclusão de clientes cadastrados.

#### RF24 - Consultar histórico de compras
O sistema deve permitir consultar o histórico de compras realizadas por cada cliente.

### Vendas:
#### RF25 - Registrar venda
O sistema deve permitir registrar vendas de produtos.

#### RF26 - Registrar itens da venda
O sistema deve permitir adicionar um ou mais produtos a uma venda, informando suas respectivas quantidades.

#### RF27 - Registrar forma de pagamento
O sistema deve permitir informar a forma de pagamento utilizada em uma venda.

#### RF28 - Vincular cliente à venda
O sistema deve permitir **opcionalmente** associar uma venda a um cliente cadastrado.

### Caixa:
#### RF29 - Abrir caixa
O sistema deve permitir a abertura do caixa para iniciar as operações de venda.

#### RF30 - Registrar movimentações do caixa
O sistema deve registrar as movimentações financeiras realizadas durante o período em que o caixa estiver aberto.

#### RF31 - Fechar caixa
O sistema deve permitir o fechamento do caixa, registrando o resultado financeiro do período.

#### RF32 - Consultar histórico de caixas
O sistema deve permitir consultar os caixas já encerrados e suas respectivas movimentações.

### Financeiro
#### RF33 - Registrar receita
O sistema deve permitir registrar receitas financeiras.

#### RF34 - Registrar despesa
O sistema deve permitir registrar despesas financeiras.

#### RF35 - Consultar movimentações financeiras
O sistema deve permitir consultar o histórico de receitas e despesas registradas.

#### RF36 - Editar movimentação financeira
O sistema deve permitir alterar uma receita ou despesa registrada.

#### RF37 - Excluir movimentação financeira
O sistema deve permitir excluir uma receita ou despesa registrada.

#### RF38 - Calcular saldo financeiro
O sistema deve calcular automaticamente o saldo financeiro com base nas receitas e despesas registradas.

### Relatórios
#### RF39 - Gerar relatório de vendas
O sistema deve permitir gerar relatórios relacionados às vendas realizadas.

#### RF40 - Gerar relatório de estoque
O sistema deve permitir gerar relatórios relacionados aos produtos e movimentações do estoque.

#### RF41 - Gerar relatório financeiro
O sistema deve permitir gerar relatórios relacionados às receitas, despesas e saldo financeiro.

### Login
#### RF42 - Realizar login
O sistema deve permitir que usuários cadastrados realizem login para acessar o sistema.

#### RF43 - Encerrar sessão
O sistema deve permitir que o usuário encerre sua sessão.

### Permissões de acesso:
#### RF44 - Gerenciar permissões de usuários
O sistema deve permitir que usuários autorizados configurem as permissões de acesso de outros usuários.

#### RF45 - Controlar acesso por permissão
O sistema deve permitir ou restringir o acesso às funcionalidades do sistema de acordo com as permissões atribuídas ao usuário.

#### RF46 - Gerenciar usuários
O sistema deve permitir que usuários autorizados **cadastrem, editem e removam** usuários do sistema.

### Total de produtos:
#### RF47 - Consultar total de produtos
O sistema deve permitir visualizar a quantidade total de produtos cadastrados.

### Produtos com menor saída
#### RF48 - Consultar produtos com menor saída
O sistema deve permitir visualizar os produtos com menor quantidade de saídas em um determinado período.

### Vencimento de produtos
#### RF49 - Controlar validade dos produtos
O sistema deve permitir registrar e acompanhar a data de validade dos produtos.

#### RF50 - Identificar produtos próximos do vencimento
O sistema deve permitir identificar produtos que estejam próximos da data de validade.

---
## Requisitos Não Funcionais
#### RNF01 - Desempenho
O sistema deve apresentar tempo de resposta adequado para as operações realizadas pelos usuários.

#### RNF02 - Segurança
O sistema deve proteger os dados dos usuários e do sistema contra acessos não autorizados.

#### RNF03 - Disponibilidade
O sistema deve estar disponível para utilização durante o período de operação definido para o serviço.

#### RNF04 - Backup
O sistema deve realizar backups periódicos dos dados armazenados.

#### RNF05 - Escalabilidade
O sistema deve permitir a expansão da quantidade de usuários e dados sem comprometer significativamente seu funcionamento.

#### RNF06 - Usabilidade
O sistema deve possuir uma interface simples e intuitiva, permitindo que os usuários realizem suas operações com facilidade.

#### RNF07 - Compatibilidade
O sistema deve ser compatível com os principais navegadores utilizados para acesso à plataforma.

#### RNF08 - Manutenibilidade
O sistema deve possuir uma estrutura que facilite sua manutenção, correção de erros e evolução.

---
## Regras de Negócio
#### RN01 - Identificação de produtos
Cada produto deverá possuir um ID único no sistema.

#### RN02 - Validade dos produtos
O sistema deverá sinalizar produtos que estejam próximos da data de validade.

#### RN03 - Identificação de fornecedores
Cada fornecedor deverá possuir um CPF ou CNPJ único no sistema.

#### RN04 - Identificação de clientes
Cada cliente deverá possuir um CPF ou CNPJ único no sistema.

---
## Dúvidas para o Cliente
#### Dispositivos móveis
O sistema deverá ser compatível com dispositivos móveis?

#### Módulo de PDV
O sistema deverá possuir um módulo de PDV (Ponto de Venda)?