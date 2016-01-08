'use strict';

class StateData {
  data() {
    var data = {
      'AC' : {
        'receipt' : '100102',
        'detailment' : '000005',
        'product' : '33',
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : true
      },
      'AL' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : 'campoAdicional0',
        'period' : false
      },
      'AM' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'customer_data': false
      },
      'AP' : {
        'receipt' : '100099',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : false
      },
      'BA' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'convenium': false,
        'customer_data': false
      },
      'CE' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : false,
        'customer_data': false
      },
      'DF' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : true,
        'convenium': false,
        'customer_data': false
      },
      'GO' : {
        'receipt' : '100099',
        'detailment' : false,
        'product' : '33',
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : true

      },
      'MA' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'force_principal' : true,
      },
      'MG' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : false,
        'customer_data': false
      },
      'MS' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : false
      },
      'MT' : {
        'receipt' : '100102',
        'detailment' : '000055',
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : true,
        'customer_data': false
      },
      'PA' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'force_principal' : true
      },
      'PB' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'customer_data': false
      },
      'PE' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : false
      },
      'PI' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : false,
        'force_principal' : true
      },
      'PR' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : false,
        'customer_data': false
      },
      'RN' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : false,
        'customer_data': false
      },
      'RO' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'force_principal' : true,
        'customer_data': false
      },
      'RR' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : false,
        'alternative_nf_field' : false,
        'period' : true,
        'force_principal' : true,
        'customer_data': false
      },
      'RS' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : false,
        'force_principal' : false
      },
      'SC' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : false,
        'force_principal' : false,
        'convenium': false,
        'customer_data': false,
        'use_valor_total': true
      },
      'SE' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : true,
        'force_principal' : false,
        'convenium': false
      },
      'TO' : {
        'receipt' : '100102',
        'detailment' : false,
        'product' : false,
        'origin_document' : true,
        'alternative_nf_field' : false,
        'period' : true,
        'force_principal' : true
      },
    }

    return data;
  }
}

module.exports = new StateData()
