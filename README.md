🍔 Sistema de Gestão - Rede de Varejo Alimentício LANCHE
 
Este projeto foi desenvolvido como parte da Atividade Prática Integradora do curso de Ciência da Computação da UNIP, sob a orientação do professor André de Lira Muniz.
A solução foca no Cenário 3, modernizando a gestão da rede LANCHE para superar desafios operacionais como o monitoramento de perecíveis e a necessidade de alta disponibilidade nas vendas
.
🚀 Principais Funcionalidades

Controle Automatizado de Perecíveis: Sistema que realiza o monitoramento rigoroso de validade e temperatura, disparando alertas para evitar riscos sanitários
.
Sincronização Bidirecional em Tempo Real: Integração total entre as unidades e o centro de distribuição para atualização imediata de inventário
.
PDV de Latência Ultra-Baixa: Interface otimizada para processar pagamentos e cupons fiscais em poucos segundos, eliminando filas em horários de pico
.
Modo de Contingência Offline: Capacidade de manter a operação de vendas mesmo em quedas de conexão, com sincronização automática após o restabelecimento do sinal
.
Segurança e Log de Auditoria: Autenticação para operações sensíveis e manutenção de um log detalhado de todas as transações para análises financeiras e auditorias
.
📋 Itens em Estoque (Dados Iniciais)

O sistema inicia com os seguintes itens pré-cadastrados para validação do monitoramento de validade:

Produto: Polvilho/ Data de Validade: 2026-04-26 / Temperatura: Ambiente

Produto: Pão de Hambúrguer / Data de Validade: 2026-04-28 / Temperatura: Ambiente

Produto: Carne Bovina / Data de Validade: 2026-04-27 / Temperatura: 2°C


🛠️ Tecnologias Utilizadas

Front-end: JavaScript (LocalStorage para modo offline), HTML5 e CSS3.
Back-end: Node.js com framework Express.
Banco de Dados: Simulação de banco em memória para prototipagem rápida.
Versionamento: Git e GitHub.

📋 Engenharia de Requisitos

Requisitos Funcionais (RF)

RF-01: Controle automatizado de validade e temperatura dos itens

.

RF-02: Sincronização bidirecional do inventário em tempo real

.

RF-03: Registro e armazenamento de vendas em modo offline para posterior sincronização

.

Requisitos Não Funcionais (RNF)

RNF-01: Interface de PDV com operação de latência ultra-baixa

.

RNF-03: Conformidade rigorosa com a LGPD e criptografia de base de dados

.

RNF-05: Arquitetura modular com APIs abertas para integração logística

.

⚙️ Como Executar o Projeto

Acesse a pasta do projeto: cd "Projeto Lanche"

Instale as dependências: npm install

Inicie o servidor: node server.js

Acesse a aplicação no navegador em: http://localhost:3000

--------------------------------------------------------------------------------
Desenvolvido por: Igor (RA: T870JH3)
Instituição: UNIP - Ciência da Computação
Professor Orientador: André de Lira Muniz
@agdelira 
