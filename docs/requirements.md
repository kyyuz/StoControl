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
- RF01 - Cadastro de produtos.
- RF02 - Edição de produtos.
- RF03 - Exclusão de produtos.
- RF04 - Cadastro de categoria de produtos.
- RF05 - Cadastro de quantidade de produtos.
- RF06 - Cadastro de preço de compra de produtos.
- RF07 - Cadastro de preço de venda de produtos.
- RF08 - Controle de estoque mínimo.
- RF09 - Entrada de produtos.
- RF10 - Saída de produtos.
- RF11 - Histórico de movimentação de produtos.
- RF12 - Total de produtos.
- RF13 - Produtos com estoque baixo.
- RF14 - Login de usuário
- RF15 - Cadastro de clientes.
- RF16 - Edição de clientes.
- RF17 - Exclusão de clientes.
- RF18 - Histórico de compra de clientes.
- RF18 - Cadastro de fornecedores.
- RF19 - Edição de fornecedores.
- RF20 - Exclusão de fornecedores.
- RF21 - Registro de vendas.
- RF22 - Controle de formas de pagamento.
- RF23 - Abertura de caixa.
- RF24 - Fechamento de caixa.
- RF25 - Registro de receitas.
- RF26 - Registro de despesas.
- RF27 - Relatório de vendas.
- RF28 - Relatório de estoque.
- RF29 - Relatório financeiro.
- RF30 - Histórico de movimentações financeiras.

---
## Requisitos Não Funcionais
- RNF01 - O sistema deve possuir autenticação.
- RNF02 - O tempo de resposta deve ser inferior a 2 segundos.
- RNF03 - Os dados devem possuir backup periódico.
- RNF04 - Apenas usuários autorizados poderão acessar determinadas funcionalidades.
- RNF06 - O sistema deve possuir um acompanhamento de vencimento de produtos.
- RNF07 - O sistema deve informar os produtos com menos saída do estoque.
- RNF08 - O sistema deve conseguir exportar relatórios.

---
## Regras de Negócio
- RN01 - Cada produto deverá ter um ID único.
- RN02 - O sistema irá notificar do acompanhamento de validade dos produtos.
- RN03 - Cada fornecedor deverá ter um CNPJ único.
- RN04 - Cada cliente deverá ter um CPF único.

---
## Dúvidas para o Cliente
- O sistema deve funcionar em dispositivos móveis?
- Haverá modulo de PDV?