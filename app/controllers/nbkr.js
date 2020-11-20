const sql = require('../models/db.js');
const { response } = require('express');
const fetch = require('node-fetch')
var xml2js = require('xml2js');
var dayjs = require('dayjs')
var dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
const NbkrService = require("../models/nbkr.model.js");

const replace = (nbkr_currency) => {
  return nbkr_currency.replace(",", ".")
}

exports.updateDaily = (req, res) => {
  console.log(req.nbkr_currency)
   
fetch('https://www.nbkr.kg/XML/daily.xml')  
  .then((response) => response.text())
  .then((string) => xml2js.parseStringPromise(string, ))
  .then(result => {
    let nbkr_currency = {};
    nbkr_currency.nbkr_date = dayjs(result.CurrencyRates.$.Date, 'DD.MM.YYYY').format('YYYY-MM-DD');
    nbkr_currency.created_date = new Date(); 
    nbkr_currency.updated_date = new Date();
    result.CurrencyRates.Currency.forEach((item) => {
    nbkr_currency[item.$.ISOCode.toLowerCase()] = item.Value[0];
    })

   
    const nbkr = new NbkrService({
      usd: replace(nbkr_currency.usd),
      eur: replace(nbkr_currency.eur),
      kzt: replace(nbkr_currency.kzt),
      rub: replace(nbkr_currency.rub),
      created_date: new Date(),
      updated_date: new Date(),
      nbkr_date: new Date(),
      created_by: 1
    });

    NbkrService.create(nbkr)
    .then((data) => {
      res.status(200).send({
            message: "OK!"
          });
    })
    .catch(function(err) {  
      res.status(500).send({
        message: err
      });  
    });
  })
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
};

