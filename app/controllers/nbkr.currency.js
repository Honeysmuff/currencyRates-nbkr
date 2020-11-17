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