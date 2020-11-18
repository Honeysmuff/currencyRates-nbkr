const { numberToDate } = require('xlsx-populate');
const XlsxPopulate = require('xlsx-populate');
var dayjs = require('dayjs')
var dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
const NbkrCurrency = require("../models/nbkr.model.js");
const getDate = (num) => {
    return XlsxPopulate.numberToDate(num);
}


// {
//     2012 : [{
//         date: '01.01.2012',
//         usd: '46.1233',
//         ...
//     }...]
// }
const setToDataBase = (yearData) => {
    yearData.map((daylyData, index) => {
        // console.log('parseSheets', daylyData)
      
     // nbkr.create();
    const nbkr = new NbkrCurrency({
        usd: (daylyData.usd),
        eur: (daylyData.eur),
        kzt: (daylyData.kzt),
        rub: (daylyData.rub),
        nbkr_date: (daylyData.nbkr_date),
        created_date: new Date(),
        updated_date: new Date(),
        created_by: 1
      });
      
      
      NbkrCurrency.create(nbkr, (err, data) => {
  
      });
    })
}


XlsxPopulate.fromFileAsync("./dailyrus.xlsx")
.then(workbook => {
    
    const sheets = workbook.sheets();
    const parseSheets = {};
    
    sheets.map((sheet) => {
        // return sheet.usedRange().value();
        const [header, ...rows] = sheet.usedRange().value();
        let formattedDates = [];
        rows.map((row) => {
            if (row[0]) {
                let nbkrData = {}
                row.map((item, index) => {
                    if (header[index] === 'date') {
                        Object.assign(nbkrData, { nbkr_date: getDate(item)})
                    } else {
                        Object.assign(nbkrData, { [header[index]] : item})
                    }
                })
                return formattedDates.push(nbkrData)
            }
        })
        return Object.assign(parseSheets, { [sheet.name()] : formattedDates }) 
    })
    Object.keys(parseSheets).map((key, index) => {
        console.log(parseSheets[key])
        setToDataBase(parseSheets[key])
    })
    // setToDataBase(parseSheets['2012'])
});


