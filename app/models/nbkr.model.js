const sql = require('./db.js');

const NbkrCurrency = function(nbkr) {
    this.usd = nbkr.usd;
    this.eur = nbkr.eur;
    this.kzt = nbkr.kzt;
    this.rub = nbkr.rub;
    this.created_date = nbkr.created_date;
    this.updated_date = nbkr.updated_date;
    this.created_by = nbkr.created_by;
    this.nbkr_date = nbkr.nbkr_date;
};

NbkrCurrency.create = (newNbkr) => {
    return new Promise ((resolve, reject ) => {
        sql.query('INSERT INTO rates_currency SET ?', newNbkr, (err, res) => {
        if (err) {
            reject(err);
        }
        resolve({id: res.inserId, ...newNbkr});
    });
  })
};

NbkrCurrency.findByDate = (nbkrDate, result) => {
    sql.query(`SELECT * FROM nbkr_currency.rates_currency WHERE DATE(nbkr_date) = "${nbkrDate}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found date: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };



module.exports = NbkrCurrency;
