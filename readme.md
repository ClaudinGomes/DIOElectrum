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
- A chave privada gerada deve ser **mantida em segurança** para evitar perdas de acesso.

## 👨‍💻 Autor
Este projeto foi desenvolvido como parte da formação **Blockchain Specialist**.

