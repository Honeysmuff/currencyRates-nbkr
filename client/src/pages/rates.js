import React from 'react'
// import 'materialize-css'
// import imgUsd from '../img/usd@2x.png';
// import imgRub from '../img/rub@2x.png';
// import imgKzt from '../img/kzt@2x.png';
// import imgEur from '../img/eur@2x.png';


// class Rates extends React.Component {
//     render() {
//         return (
//             <div className="currency__result">
//                 <div className="currency__result-date">Дата: {this.props.nbkr_date}</div>
//                 <div className="currency__result-usd"><div className="icon_usd"></div>USD: {this.props.usd} сом</div>
//                 <div className="currency__result-rub"><div className="icon_rub"></div>RUB: {this.props.rub} сом</div>
//                 <div className="currency__result-kzt"><div className="icon_kzt"></div>KZT: {this.props.kzt} сом</div>
//                 <div className="currency__result-eur"><div className="icon_eur"></div>EUR: {this.props.eur} сом</div>
//             </div>
//         )
//     }
// }

function Rates(props) {
    return (
        <div className="currency_result">
            <div className="currency__result-date">Дата: {props.nbkr_date}</div>
            <div className="currency__result-usd"><div className="icon_usd"></div>USD: {props.usd} сом</div>
            <div className="currency__result-rub"><div className="icon_rub"></div>RUB: {props.rub} сом</div>
            <div className="currency__result-kzt"><div className="icon_kzt"></div>KZT: {props.kzt} сом</div>
            <div className="currency__result-eur"><div className="icon_eur"></div>EUR: {props.eur} сом</div>
        </div>
    )
}

export default Rates