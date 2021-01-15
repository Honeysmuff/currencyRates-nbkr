import React, { useState } from 'react'
import Info from './pages/info'
import Form from './pages/form'
import Rates from './pages/rates'
var dayjs = require('dayjs')

// import 'materialize-css'
// let API_KEY = '2020-11-17'


function App() {
  const [state, setState] = useState({
    eur: undefined,
    kzt: undefined,
    rub: undefined,
    usd: undefined,
    date: undefined,
    error: undefined,
  })

  const gettingDailyCurses = async (date) => {
    if (date) {
      const api_url = await
        fetch(`/nbkr_daily_courses?nbkrDate=${date}`);
      const data = await api_url.json()
      // console.log(data);

      setState({
        eur: data.eur,
        kzt: data.kzt,
        rub: data.rub,
        usd: data.usd,
        nbkr_date: dayjs(data.nbkr_date).format('DD/MM/YYYY'),
        error: ""
      })
    }
  }

  return (
    <div className="main">
      <div className="container">
        <div className="currency">
          <div className="currency__header">
            <Info />
          </div>
          <div className="currency__block">
            <Form dateMethod={gettingDailyCurses} />
            <Rates
              eur={state.eur}
              kzt={state.kzt}
              rub={state.rub}
              usd={state.usd}
              nbkr_date={state.nbkr_date}
              error={state.error}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

