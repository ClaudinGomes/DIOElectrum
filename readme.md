# Gerador de Carteira Bitcoin na Testnet

Este projeto consiste em um gerador de carteiras Bitcoin na testnet, utilizando as bibliotecas `bip32`, `bip39` e `bitcoinjs-lib`. O código gera um mnemonic (seed), deriva uma chave privada e um endereço Bitcoin compatível com a rede de teste.

## 📌 Tecnologias Utilizadas
- **Node.js**
- **bitcoinjs-lib**
- **bip32**
- **bip39**
- **Electrum**
- **Bitcoin Faucet**

## 📂 Estrutura do Projeto
O projeto contém os seguintes arquivos e pastas:

```
/IMAGENS  -> Pasta para armazenar prints de tela como comprovante da execução
index.js  -> Código principal para gerar a carteira Bitcoin testnet
README.md -> Documentação do projeto
```

## 🚀 Instalação
Para rodar o projeto, siga os passos abaixo:

1. Instale o Node.js em sua máquina (caso ainda não tenha instalado).
2. Clone este repositório ou copie o código.
3. Instale as dependências necessárias executando o seguinte comando no terminal:

```sh
npm install bitcoinjs-lib bip32 bip39
```

## ▶️ Execução do Código
Após a instalação das dependências, execute o seguinte comando para gerar a carteira:

```sh
node index.js
```

O resultado exibirá:
- **Endereço Bitcoin gerado**
- **Chave privada (WIF)**
- **Seed (mnemonic)**

## 🔧 Ferramentas Utilizadas
### ⚡ Electrum
O Electrum foi utilizado para importar a carteira gerada e verificar o saldo.

### 💰 Bitcoin Faucet
Utilizamos um faucet para receber Bitcoins de teste na carteira gerada.

## 🖼️ Comprovantes
Todos os passos da execução foram registrados em prints de tela, armazenados na pasta `IMAGENS` para comprovar a conclusão do exercício.

## 🔍 Observações
- Esta carteira é gerada na **testnet**, uma rede de testes do Bitcoin. **Não utilize para transações reais**.
A chave privada gerada deve ser mantida em segurança para evitar perdas de acesso.


## 💻 Testes na Testnet

Se você deseja testar a carteira gerada com a testnet, siga os passos abaixo:

### 1. Obtendo Testnet BTC
Você pode usar o **faucet** para receber uma pequena quantia de Bitcoin de testnet, que pode ser utilizada para transações de teste.

- **Faucet BTC Testnet**:  
   Acesse o faucet e insira seu endereço de Bitcoin de testnet para receber os fundos:  
   [BTC Testnet Faucet](https://testnet.help/en/btcfaucet/testnet#log)

**Passos**:

1. Gere um endereço de testnet (por exemplo, usando uma carteira compatível com testnets).
2. Copie o endereço e cole no campo indicado no faucet.
3. Aguarde a transação ser enviada para seu endereço.

### 2. Acompanhando Blocos na Testnet
Após realizar transações ou acompanhar a atividade de blocos na testnet, você pode visualizar detalhes de transações e blocos usando os seguintes exploradores de blocos:

- **Blockstream - Testnet**:  
   Visualize os blocos na testnet e consulte transações:  
   [Blockstream Testnet](https://blockstream.info/testnet/address/)

- **Mempool - Testnet**:  
   Outra excelente ferramenta para ver a atividade de blocos na testnet:  
   [Mempool Testnet4](https://mempool.space/testnet4)

## 👨‍💻 Autor
Este projeto foi desenvolvido como parte da formação **Blockchain Specialist**.

