'use strict';

var app = require('app')
var BrowserWindow = require('browser-window')
var FormAutomator = require('./models/form_automator.js')

const webdriverio = require('webdriverio')
var client = webdriverio.remote({
    host: "localhost",
    port: 9515,
    desiredCapabilities: {
        browserName: 'chrome',
    }
});

const ipcMain = require('electron').ipcMain;

client.on('error', function() {
  // ipcMain.send('notification', 'O fluxo foi modificado. Contate um administrador.')
})

app.on('ready', function() {
  var main_window = new BrowserWindow({
    width: 500,
    height: 500
  })

  main_window.loadURL(['file://', __dirname, '/index.html'].join(''))

  ipcMain.on('fill_gnre', function(e, uf, cpf, name) {
    var automator = new FormAutomator('http://www.gnre.pe.gov.br/gnre/v/guia/digitar')
    automator.setClient(client)
    automator.start(uf, cpf, name)
  })

  main_window.on('closed', function() {
    automator.getSession().end();
    main_window = null;
  });
})
