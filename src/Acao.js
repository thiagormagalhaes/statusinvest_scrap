const Invest = require('./Invest')

module.exports = class Acao extends Invest {

  addBasico ($) {
    this.basico($)

    this.cnpj = $('#company-section > div > div.d-block.d-md-flex.mb-5.img-lazy-group > div.company-description.w-100.w-md-70.ml-md-5 > h4 > small').text()

    let preco_atual = $('#main-2 > div:nth-child(4) > div > div.pb-3.pb-md-5 > div > div.info.special.w-100.w-md-33.w-lg-20 > div > div:nth-child(1) > strong').text()
    this.preco_atual.variacao = $('#main-2 > div:nth-child(4) > div > div.pb-3.pb-md-5 > div > div.info.special.w-100.w-md-33.w-lg-20 > div > div.w-lg-100 > span > b').text()
    this.preco_atual.valor = Number(preco_atual.replace(",", '.'))

    let p_vp = $('#main-2 > div:nth-child(4) > div > div:nth-child(5) > div > div:nth-child(1) > div > div:nth-child(3) > div > div > strong').text()
    this.p_vp = Number(p_vp.replace(",", '.'))

    let dividend_yield = $('#main-2 > div:nth-child(4) > div > div.pb-3.pb-md-5 > div > div:nth-child(4) > div > div:nth-child(1) > strong').text()
    this.dividend_yield = Number(dividend_yield.replace(",", "."))
  }
}