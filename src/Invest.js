const cheerio  = require('cheerio')

module.exports = class Invest {
  ticket = null
  tipo = null
  nome = null
  cnpj = null
  preco_atual = {
    valor: null,
    variacao: null
  }
  p_vp = null
  dividend_yield = null

  returnDate(data) {
    const arrData = data.split('/')
    const stringFormatada = arrData[1] + '-' + arrData[0] + '-' + arrData[2]

    return new Date(stringFormatada)
  }

  basico ($) {
    this.ticket = $('#main-header > div > div > div:nth-child(1) > div > ol > li:nth-child(3) > a > span').text()
    this.tipo = $('#main-header > div > div > div:nth-child(1) > div > ol > li:nth-child(2) > a > span').text()
    this.nome = $('#main-header > div > div > div:nth-child(1) > h1 > small').text()
  }

  getDividendos ($) {
    const arrTable = eval($('#results').val())
    const response = []

    arrTable.map((row) => {
      response.push({
        tipo: row.et,
        data_com: this.returnDate(row.ed),
        pagamento: this.returnDate(row.pd),
        valor: row.v
      })
    })

    return response
  }

  addDividendos ($) {
    const response = this.getDividendos($)

    let ano_passado = $('#earning-section > div.list > div > div > div:nth-child(1) > div > div > strong').text()
    ano_passado = Number(ano_passado.replace(",", "."))

    let ano_atual = $('#earning-section > div.list > div > div > div:nth-child(2) > div > div > strong').text()
    ano_atual = Number(ano_atual.replace(",", "."))

    let sinal_comparacao = $('#earning-section > div.list > div > div > div:nth-child(3) > div > div > i').text()
    sinal_comparacao = sinal_comparacao === 'arrow_downward' ? '-' : '+'

    let comparacao = $('#earning-section > div.list > div > div > div:nth-child(3) > div > div > strong').text()

    this.dividendos = {}
    this.dividendos.info = {
      descricao: 'falta pegar essa informação*',
      ano_passado: ano_passado,
      ano_atual: ano_atual,
      comparacao: sinal_comparacao + ' ' + comparacao
    }
    this.dividendos.historico = response
  }

  getTotalDividendos($, inicio, quantidade) {
    const dividendos = this.getDividendos($)
    let retorno = 0

    inicio = this.returnDate(inicio)

    dividendos.map((row) => {
      if (inicio <= row.data_com)
        retorno += row.valor * quantidade
    })

    return retorno
  }
}