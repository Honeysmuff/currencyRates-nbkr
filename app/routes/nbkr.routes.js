const nbkrCurency = require("../controllers/nbkr.currency.js");
const nbkrService = require("../controllers/nbkr.js");
const nbkrCoursesYear = require('../controllers/nbkr.parse.js')
const nbkrDaily = require("../controllers/nbkr.currency.js")
module.exports = app => {
  
    app.post("/nbkr", nbkrCurency.create)

    app.post('/update_daily_nbkr', nbkrService.updateDaily)
    
    app.post('/update_year_nbkr', nbkrCoursesYear.updateYear)

    app.get('/nbkr_daily_courses', nbkrDaily.findDate)
};