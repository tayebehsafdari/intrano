import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
// import BigCalendar, {Views} from 'jalali-react-big-calendar';
import moment from 'jalali-moment';

// import events from './events';

class EveningProgram extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        moment().locale('fa').format('YY-MM-DD'); // it would be in jalali system

        // Setup the localizer by providing the moment (or globalize) Object
        // to the correct localizer.
        // const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

        // let allViews = Object.keys(Views).map(k => Views[k]);

        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="evening-program">
                    <div className="container">
                        <div className="weekly-schedule">
                            <h3>برنامه هفتگی کمپین بانک سپه</h3>
                            <p className="period">شنبه 1 شهریور الی جمعه 7 شهریور </p>
                            <div className="timetable">
                                {/*<BigCalendar
                                    localizer={localizer}
                                    defaultView='week'
                                    events={events}
                                    startAccessor="start"
                                    endAccessor="end"
                                    views={allViews}
                                    step={30}
                                    rtl={true}
                                    showMultiDayTimes={true}
                                    min={new Date(2020, 9, 1, 8, 30)}
                                    max={new Date(2020, 9, 1, 18, 0)}
                                    defaultDate={new Date(2020, 9, 28)}

                                    // max={dates.add(dates.endOf(new Date(2020, 9, 29), 'day'), -1, 'hours')}

                                    style={{height: 718}}
                                />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EveningProgram;