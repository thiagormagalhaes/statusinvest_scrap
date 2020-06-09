const cheerio  = require('cheerio')
const axios    = require('axios')
const Acao     = require('./Acao')
const FII      = require('./FII')

module.exports = class Ativo {

  $ = null
  PATH_FII = 'https://statusinvest.com.br/fundos-imobiliarios/'
  PATH_ACOES = 'https://statusinvest.com.br/acoes/'
  PATH = null
  TICKET = null

  ativo = null

  constructor (ticket, tipo) {
    if (tipo === 'FII') {
      this.PATH = this.PATH_FII
      this.ativo = new FII()
    } else {
      this.PATH = this.PATH_ACOES
      this.ativo = new Acao()
    }

    this.TICKET = ticket
  }

  async load () {
    const response = await axios.get(this.PATH + this.TICKET)
    this.$ = cheerio.load(response.data)

    this.addBasico()
  }

  addBasico () {
    this.ativo.addBasico(this.$)
  }
  
  addDividendos() {
    this.ativo.addDividendos(this.$)
  }

  getDividendos() {
    return this.ativo.getDividendos(this.$)
  }

  getTotalDividendos(inicio, quantidade) {
    return this.ativo.getTotalDividendos(this.$, inicio, quantidade)
  }

}