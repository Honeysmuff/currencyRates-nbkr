const sql = require('./db.js');

const NbkrService = function(nbkr) {
    this.usd = nbkr.usd;
    this.eur = nbkr.eur;
    this.kzt = nbkr.kzt;
    this.rub = nbkr.rub;
    this.created_date = nbkr.created_date;
    this.updated_date = nbkr.updated_date;
    this.created_by = nbkr.created_by;
    this.nbkr_date = nbkr.nbkr_date;

};

NbkrService.create = (newNbkr, result) => {
    sql.query('INSERT INTO rates_currency SET ?', newNbkr, (err, res) => {
        if (err) {
            console.log('error', err);
            result(err, null);
            return;
        }

        console.log('created nbkr: ', { id: res.inserId, ...newNbkr });
        result(null, {id: res.inserId, ...newNbkr});
    });
};



module.exports = NbkrService;
