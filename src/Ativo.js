const cheerio  = require('cheerio')
const axios    = require('axios')

module.exports = class Ativo {
  
  _$ = null
  PATH_FII = 'https://statusinvest.com.br/fundos-imobiliarios/'
  PATH_ACOES = 'https://statusinvest.com.br/acoes/'
  PATH = null

  ticket = null
  preco_atual = null
  p_vp = null

  constructor (ticket, tipo) {
    if (tipo === 'FII')
      this.PATH = this.PATH_FII
    else
      this.PATH = this.PATH_ACOES

    this.ticket = ticket
  }

  async load () {
    const response = await axios.get(this.PATH + this.ticket)
    this._$ = cheerio.load(response.data)
  }

}