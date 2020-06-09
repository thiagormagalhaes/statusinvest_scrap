const Invest = require('./Invest')

module.exports = class FII extends Invest {
  inicio_fundo = null
  valor_patrimonial_cota = null

  addBasico ($) {
    this.basico($)

    this.cnpj = $('#fund-section > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > strong').text()

    this.inicio_fundo = $('#fund-section > div > div > div:nth-child(2) > div > div:nth-child(3) > div > div > strong').text()

    let valor_pratrimonial_cota = $('#main-2 > div.container.pb-7 > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(1) > strong').text()
    this.valor_patrimonial_cota = Number(valor_pratrimonial_cota.replace(",", '.'))

    let preco_atual = $('#main-2 > div.container.pb-7 > div.top-info.d-flex.flex-wrap.justify-between.mb-3.mb-md-5 > div.info.special.w-100.w-md-33.w-lg-20 > div > div:nth-child(1) > strong').text()
    this.preco_atual.variacao = $('#main-2 > div.container.pb-7 > div.top-info.d-flex.flex-wrap.justify-between.mb-3.mb-md-5 > div.info.special.w-100.w-md-33.w-lg-20 > div > div.w-lg-100 > span > b').text()
    this.preco_atual.valor = Number(preco_atual.replace(",", '.'))

    let p_vp = $('#main-2 > div.container.pb-7 > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(1) > strong').text()
    this.p_vp = Number(p_vp.replace(",", '.'))

    let dividend_yield = $('#main-2 > div.container.pb-7 > div.top-info.d-flex.flex-wrap.justify-between.mb-3.mb-md-5 > div:nth-child(4) > div > div:nth-child(1) > strong').text()
    this.dividend_yield = Number(dividend_yield.replace(",", "."))
  }
}