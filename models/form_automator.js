'use strict';

var DateHelper = require('../helpers/date.js')
var StateData = require('./state_data.js')

class FormAutomator {
  constructor(url) {
    this.url = url
  }

  setClient(client) {
    this.client = client
  }

  getSession() {
    return this.session
  }

  fillUf(uf, session) {
    return session
      .selectByValue('#ufFavorecida', uf)
  }

  fillReceipt(value, session) {
    return session.selectByValue('#receita', value)
  }

  fillCompanyDetails(session) {
    return session
      .scroll('#optNaoInscrito')
      .click('#optNaoInscrito')
      .scroll('#tipoCNPJ')
      .click('#tipoCNPJ')
      .scroll('#documentoEmitente')
      .setValue('#documentoEmitente', '11714742000103')
      .scroll('#razaoSocialEmitente')
      .setValue('#razaoSocialEmitente', 'basico.com comércio eletrônico ltda')
      .scroll('#enderecoEmitente')
      .setValue('#enderecoEmitente', 'Av. São Gualter, 962 - Vila Ida')
      .scroll('#ufEmitente')
      .selectByValue('#ufEmitente', 'SP')
      .scroll('#municipioEmitente')
      .selectByValue('#municipioEmitente', '50308')
      .scroll('#cepEmitente')
      .setValue('#cepEmitente', '05455-001')
      .scroll('#telefoneEmitente')
      .setValue('#telefoneEmitente','(11)30837003')
  }

  fillDetailment(detailment, session) {
    return session
      .selectByValue('#detalheReceita', detailment)
  }

  fillProduct(session) {
    return session
      .scroll('#produto')
      .selectByValue('#produto', '33') // 33 = Comércio outros não especificados
  }

  fillOrigin(nfe, session) {
    return session
      .scroll('#tipoDocOrigem')
      .selectByValue('#tipoDocOrigem', '10') // 10 = Nota Fiscal
      .setValue('#documentoOrigem', nfe)
  }

  fillPeriod(session) {
    return session
      .scroll('#mesReferencia')
      .selectByValue('#mesReferencia', DateHelper.actualMonth())
      .scroll('#anoReferencia')
      .selectByValue('#anoReferencia', DateHelper.actualYear())
  }

  fillConvenio(session) {
    return session
      .scroll('#convenio')
      .setValue('#convenio', 'EC85/2015')
  }

  fillExpiryDate(session) {
    return session
      .scroll('#dataVencimento')
      .setValue('#dataVencimento', DateHelper.todayDate())
  }

  fillGnreValueType(session) {
    return session.click('#tipoValorPrincipal')
  }

  fillGnreValue(gnre, session) {
    return session
      .setValue('#valorPrincipal', gnre)
  }

  fillGnreValueTotal(gnre, session) {
    return session
      .setValue('#valorTotal', gnre)
  }

  fillCustomerSection(name, cpf, session) {
    return session
      .click('#optNaoInscritoDest')
      .click('#tipoCPFDest')
      .setValue('#documentoDestinatario', cpf)
      .scroll('#razaoSocialDestinatario')
      .setValue('#razaoSocialDestinatario', name)
      .scroll('#municipioDestinatario')
      .click('#municipioDestinatario')
  }

  start(state, name, cpf, nfe, gnre) {
    this.session = this.client.init().url(this.url)
    var state_info = this.getStateByName(state)

    this.session = this.fillUf(state, this.session)

    this.session = this.fillReceipt(state_info['receipt'], this.session)

    this.session = this.fillCompanyDetails(this.session)

    if(state_info['detailment']) {
      this.session = this.fillDetailment(state_info['detailment'], this.session)
    }

    if(state_info['product']) {
      this.session = this.fillProduct(this.session)
    }

    if(state_info['origin_document']) {
      this.session = this.fillOrigin(nfe, this.session)
    }

    if(state_info['period']) {
      this.session = this.fillPeriod(this.session)
    }

    if(state_info['convenium'] !== false) {
      this.session = this.fillConvenio(this.session)
    }

    this.session = this.fillExpiryDate(this.session)

    if(state_info['force_principal']) {
      this.session = this.fillGnreValueType(this.session)
    }

    if(state_info['use_valor_total'] === true) {
      this.session = this.fillGnreValueTotal(gnre, this.session)
    } else {
      this.session = this.fillGnreValue(gnre, this.session)
    }

    if(state_info['customer_data'] !== false) {
      this.session = this.fillCustomerSection(name, cpf, this.session)
    }
  }

  getStateByName(state) {
    return StateData.data()[state]
  }
}

module.exports = FormAutomator
