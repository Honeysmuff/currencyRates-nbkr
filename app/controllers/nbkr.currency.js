var dayjs = require('dayjs')
var dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const NbkrCurrency = require("../models/nbkr.model.js");


exports.create = (req, res) => {
console.log(req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const nbkr = new NbkrCurrency({
    usd: req.body.usd,
    eur: req.body.eur,
    kzt: req.body.kzt,
    rub: req.body.rub,
    created_date: new Date(),
    updated_date: new Date(),
    created_by: 1
  });

  NbkrCurrency.create(nbkr, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

const parseDate = (date) => {
  if(date) {
    return date
  } else {
    return dayjs().format('YYYY-MM-DD');
  }
}

exports.findDate = (req, res) => {
  const nbkrDate = parseDate(req.query.nbkrDate);
  NbkrCurrency.findByDate(nbkrDate, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found nbkr_currency with date ${nbkrDate}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving nbkr_currency with date " + nbkrDate
        });
      }
    } else res.send(data);
  });
};