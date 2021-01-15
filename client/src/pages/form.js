import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
// import 'react-day-picker/lib/style.css'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/ru'

var dayjs = require('dayjs')

// class Form extends React.Component {
//     render() {
//         return (
//             <form class='form' onSubmit={this.props.dateMethod}>
//                 <input type='text' name="nbkrDaily" placeholder="Дата"/>

//                 <button>Получить курс</button>
//             </form>
//         )
//     }
// }

function Form(props) {

    const handleDayChange = (day) => {
        props.dateMethod(dayjs(day).format('YYYY-MM-DD'));
    }

    return (
        <div className="currency__block-date-picker">
            <DayPickerInput
                dayPickerProps={{
                    locale: 'ru',
                    localeUtils: MomentLocaleUtils,
                }}
                classNames={{ container: 'date-picker__wrapper' }}
                onDayChange={handleDayChange}
                showOverlay='true'
            />
        </div>

    )

}

export default Form


// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleDayChange = this.handleDayChange.bind(this);

//     }

//     handleDayChange(day) {
//         this.props.dateMethod(dayjs(day).format('YYYY-MM-DD'));

//     }

//     render() {
//         // console.log(this.state.locale)
//         return (
//             <div className="currency__block-date-picker">
//                 <DayPickerInput
//                     dayPickerProps={{
//                         locale: 'ru',
//                         localeUtils: MomentLocaleUtils,
//                     }}
//                     classNames={{ container: 'date-picker__wrapper' }}
//                     onDayChange={this.handleDayChange}
//                     showOverlay='true'
//                 />
//             </div>

//         );
//     }
// }

// export default Form;

