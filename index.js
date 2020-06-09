const Ativo = require('./src/Ativo')

async function main () {
  const ativo1 = new Ativo('LOGG3', 'ACAO')
  //const ativo1 = new Ativo('VISC11', 'FII')
  await ativo1.load()

  ativo1.addDividendos()

  console.log(ativo1.getDividendos())
  console.log(ativo1.getTotalDividendos('09/04/2020', 10))
}

main()