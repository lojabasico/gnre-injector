'use strict';

var DateHelper = require('../helpers/date.js')
var StateData = require('./state_data.js')

class FormAutomator {
  constructor(url, name, cpf) {
    this.url = url
    this.name = name;
    this.cpf = cpf;
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
      .setValue('#documentoEmitente', '11.714.742/0001-03')
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

  fillDetailment(session) {
    return session
      .selectByValue('#detalheReceita', '000005')
  }

  fillProduct(session) {
    return session
      .scroll('#produto')
      .selectByValue('#produto', '33') // 33 = Comércio outros não especificados
  }

  fillOrigin(session) {
    return session
      .scroll('#tipoDocOrigem')
      .selectByValue('#tipoDocOrigem', '10') // 10 = Nota Fiscal
      .setValue('#documentoOrigem', '014561')
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

  fillGnreValue(session) {
    return session
      .setValue('#valorPrincipal', 10.50)
  }

  fillCustomerSection(session) {
    return session
      .click('#optNaoInscritoDest')
      .click('#tipoCPFDest')
      .setValue('#documentoDestinatario', this.cpf)
      .scroll('#razaoSocialDestinatario')
      .setValue('#razaoSocialDestinatario', this.name)
      .scroll('#municipioDestinatario')
      .click('#municipioDestinatario')
      .selectByName('#municipioDestinatario', 'AGUA LIMPA')
  }

  start(state) {
    this.session = this.client.init().url(this.url)
    var state_info = this.getStateByName(state)

    this.session = this.fillUf(state, this.session)

    this.session = this.fillReceipt(state_info['receipt'], this.session)

    this.session = this.fillCompanyDetails(this.session)

    if(state_info['detailment']) {
      this.session = this.fillDetailment(this.session)
    }

    if(state_info['product']) {
      this.session = this.fillProduct(this.session)
    }

    if(state_info['origin_document']) {
      this.session = this.fillOrigin(this.session)
    }

    if(state_info['period']) {
      this.session = this.fillPeriod(this.session)
    }

    this.session = this.fillConvenio(this.session)
    this.session = this.fillExpiryDate(this.session)

    if(state_info['force_principal']) {
      this.session = this.fillGnreValueType(this.session)
    }

    this.session = this.fillGnreValue(this.session)
    this.session = this.fillCustomerSection(this.session)

    // // Apenas alguns estados
    // // var part4 = part3.click('#tipoValorPrincipal')
  }

  getStateByName(state) {
    return StateData.data()[state]
  }
}

module.exports = FormAutomator
