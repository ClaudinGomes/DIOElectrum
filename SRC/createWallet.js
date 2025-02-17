// importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// definir a rede
// bitcoin - rede principal - mainnet
// testnet - rede de teste - testnet
const network = bitcoin.networks.testnet

// Derivação de Carteiras Hierárquicas Determinísticas (HD).
const path = `m/49'/1'/0'/0`

// Criando o mnemonic para a seed (12 palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Criando a raiz da cartiera HD
let root = bip32.fromSeed(seed, network)

/// Criando uma conta - par private - public keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network, 
}).address

console.log("\n=====================================================================")
console.log("Carteira gerada")
console.log("-------------------")
console.log("Endereço     : ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed         : [ " + mnemonic + " ]")
console.log("\n=====================================================================\n")