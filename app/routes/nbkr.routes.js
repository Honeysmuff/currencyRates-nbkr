const nbkrCurency = require("../controllers/nbkr.currency.js");
const nbkrService = require("../controllers/nbkr.js");

module.exports = app => {
  
    app.post("/nbkr", nbkrCurency.create)

    app.post('/update_daily_nbkr', nbkrService.updateDaily) 
};