'use strict';

var app = require('app')
var BrowserWindow = require('browser-window')
var FormAutomator = require('./models/form_automator.js')
var StateData = require('./models/state_data.js')

const webdriverio = require('webdriverio')
var client = webdriverio.remote({
    host: "127.0.0.1",
    port: 9515,
    desiredCapabilities: {
        browserName: 'google-chrome',
    }
});

const ipcMain = require('electron').ipcMain;

client.on('error', function() {
  // ipcMain.send('notification', 'O fluxo foi modificado. Contate um administrador.')
})

var sys = require('util')
var exec = require('child_process').exec;

// if(process.platform == "darwin") {
//   exec("./bin/chromedriver --url-base=wd/hub --port=9515", function(error, stdout, stderr) {});
// } else {
//   exec("chromedriver.exe --url-base=wd/hub --port=9515", function(error, stdout, stderr) {});
// }

app.on('ready', function() {
  var main_window = new BrowserWindow({
    width: 800,
    height: 600
  })

  main_window.loadURL(['file://', __dirname, '/index.html'].join(''))

  var automator = new FormAutomator('http://www.gnre.pe.gov.br/gnre/v/guia/digitar')

  ipcMain.on('close_session', function(e) {
    automator.getSession().end();
  })

  ipcMain.on('fill_gnre', function(e, uf, cpf, name, nfe, gnre) {
    automator.setClient(client)
    automator.start(uf, name, cpf, nfe, gnre)
  })

  ipcMain.on('check_customer_data', function(e, uf) {
    var stateData = StateData.data()[uf]
    var customerData = true

    if(stateData['customer_data'] === false) {
      customerData = false
    }

    e.sender.send('customer_data_visibility', customerData)

  })

  main_window.on('closed', function() {
    // automator.getSession().end();
    main_window = null;
  });
})
